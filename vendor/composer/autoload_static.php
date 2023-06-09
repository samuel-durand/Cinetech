<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbe9e72e11b85adb494a893e1c38edc1c
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'AltoRouter' => __DIR__ . '/..' . '/altorouter/altorouter/AltoRouter.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbe9e72e11b85adb494a893e1c38edc1c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbe9e72e11b85adb494a893e1c38edc1c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbe9e72e11b85adb494a893e1c38edc1c::$classMap;

        }, null, ClassLoader::class);
    }
}
