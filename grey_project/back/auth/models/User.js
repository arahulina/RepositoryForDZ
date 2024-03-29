// Подключение модуля работы с базой
const mongoose = require("mongoose");

// Настройка полей (схемы)
const contactSchema = new mongoose.Schema({

    email: { type: String, unique: true },
    password: String,
    role: String, // Разделение пользователей по группам (ролям)
    created_at: Date,
    verify_at: Date // Дата проверки пользователя

// Относится к профилю пользователя:
//     name: String,
//     phone: String,
//     message: String,
//     created_at: Date,
//     sendToMe: String,
//     sendToUser: String
});

module.exports = mongoose.model("users", contactSchema);