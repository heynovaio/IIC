  <?php
$mysqli = new mysqli("dbserver.live.e01fec94-a633-4719-804d-b398566d9048.drush.in","pantheon","8713ba295ed8442e8be1d08b27a9fb83","pantheon");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// Perform query
if ($result = $mysqli -> query("ALTER TABLE paragraphs_item_revision_field_data ADD COLUMN parent_id int(10) unsigned AFTER created")) {
  echo "Returned rows are: " . $result -> num_rows;
  // Free result set
  $result -> free_result();
}

$mysqli -> close();
?>