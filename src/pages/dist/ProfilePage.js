"use strict";
exports.__esModule = true;
var react_1 = require("react");
var images_jpeg_1 = require("../images/images.jpeg");
var ProfilePage = function () {
    var _a = react_1["default"].useState({}), admin = _a[0], setAdmin = _a[1];
    // const adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    var adminData = JSON.parse(sessionStorage.getItem('admin') || '{}');
    var loggedAdmin = Array.isArray(admin) ? admin.find(function (admin) { return admin.id === adminData.id; }) : undefined;
    // console.log("heeey", loggedAdmin);
    var _b = react_1.useState((loggedAdmin === null || loggedAdmin === void 0 ? void 0 : loggedAdmin.name) || ''), name = _b[0], setName = _b[1];
    var _c = react_1.useState((loggedAdmin === null || loggedAdmin === void 0 ? void 0 : loggedAdmin.email) || ''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState((loggedAdmin === null || loggedAdmin === void 0 ? void 0 : loggedAdmin.password) || ''), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState((loggedAdmin === null || loggedAdmin === void 0 ? void 0 : loggedAdmin.confirmPassword) || ''), confirmPassword = _e[0], setConfirmPassword = _e[1];
    var handleNamechange = function (e) {
        setName(e.target.value);
    };
    var handleEmailchange = function (e) {
        setEmail(e.target.value);
    };
    var handlePasswordchange = function (e) {
        setPassword(e.target.value);
    };
    var handleConfirmPasswordchange = function (e) {
        setConfirmPassword(e.target.value);
    };
    // fetch the admins 
    react_1.useEffect(function () {
        fetch("http://127.0.0.1:4000/admins")
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            setAdmin(data);
        })["catch"](function (error) {
            console.log(error);
        });
    }, []);
    // const adminId = JSON.parse(sessionStorage.getItem('admin') || '{}').id;
    // const loggedAdmin = Array.isArray(admin) ? admin.find((admin: AdminsProps) => admin.id === adminId) : {} as AdminsProps;
    var handleSubmit = function () {
        var data = JSON.stringify({ name: name, email: email, password: password, confirmPassword: confirmPassword });
        fetch("http://127.0.0.1:4000/admins/", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(function (res) { return res.json(); })
            .then(function (response) {
            console.log(response);
            // Update the form fields with the new values
            setName(response.name);
            setEmail(response.email);
            setPassword(response.password);
            setConfirmPassword(response.confirmPassword);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "justify-evenly w-full p-8 " },
            react_1["default"].createElement("p", { className: "text-xl my-8  " }, " Profile "),
            react_1["default"].createElement("div", { className: " bg-white rounded-lg shadow-sm" },
                react_1["default"].createElement("p", { className: " text-xl p-2 text-white w-full bg-[#95873C]" }, "My Profile"),
                react_1["default"].createElement("div", { className: "flex flex-col mx-8" },
                    react_1["default"].createElement("div", { className: "flex flex-col  my-8" },
                        react_1["default"].createElement("div", { className: "flex flex-row justify-center border-2 border-[#95873C]  m-12" },
                            react_1["default"].createElement("div", { className: "p-10 " },
                                react_1["default"].createElement("img", { className: "rounded-full w-40 h-34 text-center", src: images_jpeg_1["default"], alt: "Profile" })),
                            react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "flex flex-col justify-center" },
                                react_1["default"].createElement("div", { className: "flex flex-col mt-4 flex-grow" },
                                    react_1["default"].createElement("input", { value: name, onChange: handleNamechange, type: "text", className: "border border-gray-300 m-2 rounded-sm p-2", placeholder: "Name" })),
                                react_1["default"].createElement("div", { className: "flex flex-col flex-grow" },
                                    react_1["default"].createElement("input", { value: email, onChange: handleEmailchange, type: "text", className: "border border-gray-300 m-2 rounded-sm p-2", placeholder: "Email" })),
                                react_1["default"].createElement("div", { className: "flex flex-col flex-grow" },
                                    react_1["default"].createElement("input", { value: password, onChange: handlePasswordchange, type: "text", className: "border border-gray-300 m-2 rounded-sm p-2", placeholder: "Password" })),
                                react_1["default"].createElement("div", { className: "flex flex-col flex-grow" },
                                    react_1["default"].createElement("input", { value: confirmPassword, onChange: handleConfirmPasswordchange, type: "text", className: "border border-gray-300 m-2 rounded-sm p-2", placeholder: "Confirm Password" })),
                                react_1["default"].createElement("button", { type: "submit", className: "bg-[#95873C] text-white rounded-sm p-2 my-4" }, "Update Profile")))))))));
};
exports["default"] = ProfilePage;
