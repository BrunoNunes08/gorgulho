CREATE DATABASE gorgulho;
USE gorgulho;

CREATE TABLE moradores (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    bloco VARCHAR(255) NOT NULL,
    apartamento VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    status ENUM("residente", "proprietario", "visitante"),
    criado_em timestamp default now()
);

INSERT INTO moradores (nome, bloco, apartamento, telefone, email, status)
VALUES ("Bruno Nunes", "A", "1", "123456789", "bruno@email.com", "residente"),
("Maria Luiza Acosta de Aquino", "A", "1", "987654321", "maria@email.com", "residente");

CREATE TABLE veiculos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(255) NOT NULL UNIQUE,
    modelo VARCHAR(255) NOT NULL,
    cor VARCHAR(255) NOT NULL,
    morador_id INT NOT NULL,
    box VARCHAR(255) NOT NULL
);

INSERT INTO veiculos (placa, modelo, cor, morador_id, box)
VALUES ("IOD-4099", "Fiat", "Roxo", 1, "A11");