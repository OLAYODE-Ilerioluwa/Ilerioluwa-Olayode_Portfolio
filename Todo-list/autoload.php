<?php

spl_autoload_register(function ($className) {
    include_once "class/$className.php";
});