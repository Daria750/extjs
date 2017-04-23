<?php
header('Content-Type: text/html; charset=utf-8');
$arr=array();
$arr[0]=array('id'=>1,'value'=>"первый");
$arr[1]=array('id'=>2,'value'=>"второй");
$arr[2]=array('id'=>3,'value'=>"третий");
$arr[3]=array('id'=>4,'value'=>"четвертый");
//print_r($arr);
echo '{rows:'.json_encode($arr).'}';
?>