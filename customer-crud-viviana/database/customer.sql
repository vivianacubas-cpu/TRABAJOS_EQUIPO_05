USE model;
GO

IF OBJECT_ID('dbo.customer', 'U') IS NULL
BEGIN
    CREATE TABLE dbo.customer (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        dni VARCHAR(8) NOT NULL,
        cellphone VARCHAR(9) NOT NULL,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        age INT NOT NULL,
        state CHAR(1) NOT NULL,
        created_at DATETIME2 NOT NULL,
        updated_at DATETIME2 NULL,
        deleted_at DATETIME2 NULL,
        restored_at DATETIME2 NULL
    );
END
GO
