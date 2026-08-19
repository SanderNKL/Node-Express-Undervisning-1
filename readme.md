
# Lag RefreshToken table
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