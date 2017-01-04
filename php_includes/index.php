/**
 * Created by PhpStorm.
 * User: seandove
 * Date: 1/4/17
 * Time: 11:39 AM
 */
<?php
$a = 1;
$b = 5;
include('includes/data.php');
$result = $a * $b;
print("<br>Result is $result");
?>
<?php
$c = 2;
include('includes/data2.php');
include_once('includes/data2.php');
include('includes/data2.php');
$result2 = $c;
print("<br>Result 2 = $result2");
?>
