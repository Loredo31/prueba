DROP DATABASE IF EXISTS ControlGasto;
CREATE DATABASE ControlGasto;
USE ControlGasto;

CREATE TABLE Usuario (
    IdUsuario INT PRIMARY KEY AUTO_INCREMENT,
    NombreCompleto VARCHAR(50) NOT NULL,
    ApPaternoUsuario VARCHAR(50) NOT NULL,
    ApMaternoUsuario VARCHAR(50),
    NumTelefono CHAR(10),
    Correo VARCHAR(50) NOT NULL,
    FechaNacimiento DATETIME,
    Usuario CHAR(20) NOT NULL,
    Contrasena VARCHAR(30) NOT NULL
);

CREATE TABLE Servicio (
    IdServicio INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT,
    Descripcion VARCHAR(100),
    Cliente VARCHAR(50),
    Estado VARCHAR(20),
    Monto DECIMAL(10, 2),
    FechaServicio DATETIME,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);

CREATE TABLE Ingreso (
    IdIngreso INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT,
    TipoIngreso VARCHAR(50),
    OrigenIngreso VARCHAR(100),
    Categoria VARCHAR(30),
    Monto DECIMAL(10, 2),
    FechaIngreso DATETIME,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);

CREATE TABLE Gasto (
    IdGasto INT PRIMARY KEY AUTO_INCREMENT,
    IdUsuario INT,
    Descripcion VARCHAR(100),
    Categoria VARCHAR(30),
    Monto DECIMAL(10, 2),
    FechaTransaccion DATETIME,
    MetodoPago VARCHAR(50),
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario)
);
