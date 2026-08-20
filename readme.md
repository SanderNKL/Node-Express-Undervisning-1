# Lag users table:
```
CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1,1),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    updatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    deletedAt DATETIME2 NULL
);

INSERT INTO Users (username, email, password)
VALUES
    ('sander', 'sander@example.com', 'password123'),
    ('ola', 'ola@example.com', 'password456'),
    ('kari', 'kari@example.com', 'password789');

```

# Lag RefreshToken table
```
CREATE TABLE RefreshTokens (
    id INT IDENTITY(1,1) PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    userId INT NOT NULL,
    expiresAt DATETIME2 NOT NULL,
    createdAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    updatedAt DATETIME2 NOT NULL DEFAULT GETDATE(),
    CONSTRAINT UQ_RefreshTokens_Token UNIQUE (token),
    CONSTRAINT FK_RefreshTokens_User
        FOREIGN KEY (userId)
        REFERENCES Users(id)
);
```