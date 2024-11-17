<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Function to log messages
function logMessage($message) {
    file_put_contents('debug_log.txt', date('[Y-m-d H:i:s] ') . $message . "\n", FILE_APPEND);
}

logMessage("Script started");

// Database connection details
$host = 'localhost';
$dbname = 'user_auth';
$username = 'root';  // Change to your MySQL username
$password = '';   

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    logMessage("Received POST request");
    
    // Get the raw POST data
    $json = file_get_contents("php://input");
    logMessage("Received data: " . $json);
    
    $data = json_decode($json, true);
    
    if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
        logMessage("JSON decode error: " . json_last_error_msg());
        echo json_encode(["status" => "error", "message" => "Invalid JSON data"]);
        exit();
    }

    // Validate and sanitize input
    $name = isset($data['name']) ? sanitize_input($data['name']) : '';
    $email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_EMAIL) : '';
    $mobile = isset($data['mobile']) ? sanitize_input($data['mobile']) : '';
    $date = isset($data['date']) ? sanitize_input($data['date']) : '';
    $time = isset($data['time']) ? sanitize_input($data['time']) : '';
    $notes = isset($data['notes']) ? sanitize_input($data['notes']) : '';

    // Validate required fields
    if (empty($name) || empty($email) || empty($mobile) || empty($date) || empty($time)) {
        logMessage("Required fields are missing");
        echo json_encode(["status" => "error", "message" => "Required fields are missing"]);
        exit();
    }

    try {
        logMessage("Attempting database connection");
        // Create a new PDO instance
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        
        // Set the PDO error mode to exception
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        logMessage("Database connection successful");

        // Prepare SQL and bind parameters
        $stmt = $pdo->prepare("INSERT INTO appointment (name, email, mobile, date, time, notes) VALUES (:name, :email, :mobile, :date, :time, :notes)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':mobile', $mobile);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':time', $time);
        $stmt->bindParam(':notes', $notes);

        // Execute the prepared statement
        $stmt->execute();
        logMessage("Data inserted successfully");

        echo json_encode(["status" => "success", "message" => "Appointment booked successfully"]);
    } catch(PDOException $e) {
        logMessage("Database error: " . $e->getMessage());
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }

    // Close the connection
    $pdo = null;
} else {
    logMessage("Invalid request method: " . $_SERVER["REQUEST_METHOD"]);
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}

logMessage("Script ended");
?>