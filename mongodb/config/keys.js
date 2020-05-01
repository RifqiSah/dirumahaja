module.exports = {
    mongoURI: process.env.MONGO_URL || "mongodb://root:toor@localhost:27017/data?authSource=admin",
    jwtSecret: process.env.JWT_SECRET || "SuperSecretKey**2020"
};