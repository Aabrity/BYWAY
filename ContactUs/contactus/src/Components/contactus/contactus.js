"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./contactus.css");
const email_png_1 = __importDefault(require("../Assets/email.png"));
const book_png_1 = __importDefault(require("../Assets/book.png"));
const address_png_1 = __importDefault(require("../Assets/address.png"));
const message_png_1 = __importDefault(require("../Assets/message.png"));
const phone_png_1 = __importDefault(require("../Assets/phone.png"));
const ContactUs = () => {
    return (react_1.default.createElement("div", { className: "Screen" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "header" },
                react_1.default.createElement("div", { className: "text" }, "Contact Us"),
                react_1.default.createElement("div", { className: "underline" })),
            react_1.default.createElement("div", { className: "inputs" },
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("img", { src: email_png_1.default, alt: "" }),
                    react_1.default.createElement("input", { type: "email", placeholder: "Email" })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("img", { src: phone_png_1.default, alt: "" }),
                    react_1.default.createElement("input", { type: "text", placeholder: "Contact Number" })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("img", { src: book_png_1.default, alt: "" }),
                    react_1.default.createElement("input", { type: "text", placeholder: "Subject" })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("img", { src: address_png_1.default, alt: "" }),
                    react_1.default.createElement("input", { type: "text", placeholder: "Address" })),
                react_1.default.createElement("div", { className: "input" },
                    react_1.default.createElement("img", { src: message_png_1.default, alt: "" }),
                    react_1.default.createElement("input", { type: "text", placeholder: "Message" }))),
            react_1.default.createElement("div", { className: "submit-container" },
                react_1.default.createElement("div", { className: "submit" }, "Send"))),
        react_1.default.createElement("div", { className: "our-container" },
            react_1.default.createElement("div", { className: "header1" },
                react_1.default.createElement("div", { className: "text1" }, "Our Contacts"),
                react_1.default.createElement("div", { className: "underline1" })),
            react_1.default.createElement("div", { className: "Sub-Head" },
                react_1.default.createElement("img", { src: address_png_1.default, alt: "" }),
                react_1.default.createElement("div", { className: "texts" }, "Address"),
                react_1.default.createElement("div", { className: "Info" }, " Boudhha, Kathmandu ")),
            react_1.default.createElement("div", { className: "Sub-Head" },
                react_1.default.createElement("img", { src: phone_png_1.default, alt: "" }),
                react_1.default.createElement("div", { className: "texts" }, "Phone"),
                react_1.default.createElement("div", { className: "Info" }, " 9860689*** ")),
            react_1.default.createElement("div", { className: "Sub-Head" },
                react_1.default.createElement("img", { src: email_png_1.default, alt: "" }),
                react_1.default.createElement("div", { className: "texts" }, "Email"),
                react_1.default.createElement("div", { className: "Info" }, " aa***@gmail.com ")))));
};
exports.default = ContactUs;
