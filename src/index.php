<?php
session_start();

// Database connection
$host = 'localhost';
$dbname = 'user_auth';
$username = 'root';  // Change to your MySQL username
$password = '';      // Change to your MySQL password

// Create connection
$conn = new mysqli($host, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database and table if they don't exist
$sql = "CREATE DATABASE IF NOT EXISTS user_auth";
if ($conn->query($sql) === TRUE) {
    $conn->select_db('user_auth');
    
    // Create users table
    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";
    
    if (!$conn->query($sql)) {
        echo "Error creating table: " . $conn->error;
    }
} else {
    echo "Error creating database: " . $conn->error;
}

// Initialize variables
$error = '';
$success = '';
$page = isset($_GET['page']) ? $_GET['page'] : 'login';

// Handle form submissions
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['action'])) {
        if ($_POST['action'] == 'signup') {
            // Signup Process
            $username = trim($_POST['username']);
            $email = trim($_POST['email']);
            $password = trim($_POST['password']);
            $confirm_password = trim($_POST['confirm_password']);
            
            // Validation
            if (empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
                $error = "All fields are required";
            } elseif ($password !== $confirm_password) {
                $error = "Passwords do not match";
            } elseif (strlen($password) < 6) {
                $error = "Password must be at least 6 characters long";
            } else {
                // Check if username/email already exists
                $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
                $stmt->bind_param("ss", $username, $email);
                $stmt->execute();
                $result = $stmt->get_result();
                
                if ($result->num_rows > 0) {
                    $error = "Username or email already exists";
                } else {
                    // Hash password and insert user
                    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
                    $stmt->bind_param("sss", $username, $email, $hashed_password);
                    
                    if ($stmt->execute()) {
                        $success = "Registration successful! You can now login.";
                        $page = 'login';
                    } else {
                        $error = "Something went wrong. Please try again.";
                    }
                }
            }
        } elseif ($_POST['action'] == 'login') {
            // Login Process
            $username = trim($_POST['username']);
            $password = trim($_POST['password']);
            
            if (empty($username) || empty($password)) {
                $error = "Both username and password are required";
            } else {
                // Fetch user from database
                $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
                $stmt->bind_param("s", $username);
                $stmt->execute();
                $result = $stmt->get_result();
                
                if ($result->num_rows === 1) {
                    $user = $result->fetch_assoc();
                    if (password_verify($password, $user['password'])) {
                        // Password is correct, start a new session
                        $_SESSION['user_id'] = $user['id'];
                        $_SESSION['username'] = $user['username'];
                        // $success = "Login successful!";
                        header("Location: http://localhost:5173/");
                        exit;
                    } else {
                        $error = "Invalid username or password";
                    }
                } else {
                    $error = "Invalid username or password";
                }
            }
        }
    }
}

// Check if user is logged in for dashboard
if ($page == 'dashboard' && !isset($_SESSION['user_id'])) {
    header("Location: ?page=login");
    exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Authentication System</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #4361ee;
            --secondary-color: #3f37c9;
            --accent-color: #4895ef;
            --success-color: #4CAF50;
            --error-color: #ff4444;
            --text-color: #333;
            --light-text: #666;
            --background: linear-gradient(135deg, #FFDD00, #9B4DFF, #7A1FA1); /* Yellow, Violet, Purple */
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: all 0.3s ease;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--background);
            position: relative;
            overflow: hidden;
        }

        /* Container for the form and image */
        .auth-container {
            display: flex;
            justify-content: flex-start; /* Align to the left */
            align-items: center;
            height: 100vh;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
        }

        /* Text container */
        .text-container {
            flex: 1;
            padding: 3rem;
            /* background: #2c3e50; Dark color background */
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 15px;
            height: 100%; /* Full height */
            width: 450px; /* Same width as the form */
            position: relative;
            overflow: hidden;
            background-image: linear-gradient(to right, #1E90FF, #4169E1, #00008B, #191970);
        }

        /* Heading text */
        .text-container h1 {
            font-size: 4rem; /* Bigger font size */
            font-weight: 600;
            letter-spacing: 1px;
            color: white;
            opacity: 0;
            transform: translateY(50px);
            animation: textAppear 3s ease-out forwards;
            background-image: linear-gradient(to right, #1E90FF, #4169E1, #00008B, #191970);
        }

        /* Text animation (each word appears one by one) */
        @keyframes textAppear {
            0% {
                opacity: 0;
                transform: translateY(50px);
            }
            50% {
                opacity: 0.5;
                transform: translateY(0);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .container {
            width: 450px; /* Increased width */
            padding: 2rem;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 2;
        }

        .container h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--text-color);
            font-size: 2rem;
            font-weight: 600;
            position: relative;
        }

        .container h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background: var(--primary-color);
            border-radius: 2px;
        }

        /* Removed the shake effect */
        .error {
            color: var(--error-color);
            margin-bottom: 1rem;
            text-align: center;
            padding: 0.5rem;
            border-radius: 5px;
            background: rgba(255, 68, 68, 0.1);
        }

        .success {
            color: var(--success-color);
            margin-bottom: 1rem;
            text-align: center;
            padding: 0.5rem;
            border-radius: 5px;
            background: rgba(76, 175, 80, 0.1);
            animation: slideDown 0.5s ease-in-out;
        }

        /* Form Group Styling */
        .form-group {
            margin-bottom: 1.5rem;
            position: relative;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--light-text);
            font-size: 0.9rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.8rem 1rem;
            border: 2px solid #e1e1e1;
            border-radius: 10px;
            font-size: 1rem;
            background: rgba(255, 255, 255, 0.9);
            transition: all 0.3s ease;
        }

        .form-group input:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
        }

        .form-group input:focus + label {
            color: var(--primary-color);
        }

        button {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 1rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            width: 100%;
            font-size: 1rem;
            font-weight: 600;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        /* Image added to the left side of the form */
        .image-container {
            flex: 1;
            padding: 2rem;
            background: url('path-to-your-image.jpg') no-repeat center center;
            background-size: cover;
            border-radius: 15px;
        }

        .links {
            margin-top: 1.5rem;
            text-align: center;
        }

        .links p {
            color: var(--light-text);
            font-size: 0.9rem;
        }

        .links a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
        }
    </style>
</head>
<body>

    <div class="auth-container">
        <!-- Text container for the heading -->
        <div class="text-container">
            <h1>Welcome to our Dental Clinic</h1>
        </div>

        <!-- Authentication form (login/signup) -->
        <div class="container">
            <?php if ($page == 'login'): ?>
                <h2>Welcome Back</h2>
                <?php if (!empty($error)) echo "<p class='error'><i class='fas fa-exclamation-circle'></i> $error</p>"; ?>
                <?php if (!empty($success)) echo "<p class='success'><i class='fas fa-check-circle'></i> $success</p>"; ?>
                <form method="POST" id="loginForm">
                    <input type="hidden" name="action" value="login">
                    <div class="form-group">
                        <input type="text" name="username" id="username" required>
                        <label for="username">Username</label>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" id="password" required>
                        <label for="password">Password</label>
                        <i class="fas fa-lock"></i>
                    </div>
                    <button type="submit" id="loginButton">Login</button>
                </form>
                <div class="links">
                    <p>New here? <a href="?page=signup">Create an account</a></p>
                </div>
            <?php elseif ($page == 'signup'): ?>
                <h2>Create Account</h2>
                <?php if (!empty($error)) echo "<p class='error'><i class='fas fa-exclamation-circle'></i> $error</p>"; ?>
                <?php if (!empty($success)) echo "<p class='success'><i class='fas fa-check-circle'></i> $success</p>"; ?>
                <form method="POST" id="signupForm">
                    <input type="hidden" name="action" value="signup">
                    <div class="form-group">
                        <input type="text" name="username" id="username" required>
                        <label for="username">Username</label>
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" id="email" required>
                        <label for="email">Email</label>
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" id="password" required>
                        <label for="password">Password</label>
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="form-group">
                        <input type="password" name="confirm_password" id="confirm_password" required>
                        <label for="confirm_password">Confirm Password</label>
                        <i class="fas fa-lock"></i>
                    </div>
                    <button type="submit" id="signupButton">Sign Up</button>
                </form>
                <div class="links">
                    <p>Already have an account? <a href="?page=login">Login here</a></p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Image container (can be customized or removed) -->
        <div class="image-container"></div>
    </div>

</body>
</html>
