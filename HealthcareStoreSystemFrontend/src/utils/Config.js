class Config {
  BASE_URL = "https://healthcarestoresystem.onrender.com/";
  // FOR LIVE URL
  static loginUrl = "https://healthcarestoresystem.onrender.com/api/gettoken/";
  static refreshApiUrl =
    "https://healthcarestoresystem.onrender.com/api/resfresh_token/";
  static companyApiUrl = "https://healthcarestoresystem.onrender.com/api/company/";
  static homeApiUrl = "https://healthcarestoresystem.onrender.com/api/home_api/";
  static customerRequestApiUrl =
    "https://healthcarestoresystem.onrender.com/api/customer_request/";
  static medicineNameApiUrl =
    "https://healthcarestoresystem.onrender.com/api/medicinebyname/";
  static companyBankApiUrl =
    "https://healthcarestoresystem.onrender.com/api/companybank/";
  static generateBillApiUrl =
    "https://healthcarestoresystem.onrender.com/api/generate_bill_api/";
  static companyAccountApiUrl =
    "https://healthcarestoresystem.onrender.com/api/companyaccount/";
  static companyOnly = "https://healthcarestoresystem.onrender.com/api/companyonly/";
  static employeeApiURL = "https://healthcarestoresystem.onrender.com/api/employee/";
  static medicineApiUrl = "https://healthcarestoresystem.onrender.com/api/medicine/";
  static employeeBankApiUrl =
    "https://healthcarestoresystem.onrender.com/api/employee_all_bank/";
  static employeeBankApiUrlBYID =
    "https://healthcarestoresystem.onrender.com/api/employee_bankby_id/";
  static employeeSalaryApiUrl =
    "https://healthcarestoresystem.onrender.com/api/employee_all_salary/";
  static employeeSalaryByIdApiUrl =
    "https://healthcarestoresystem.onrender.com/api/employee_salaryby_id/";

  // //FOR TEST URL
  // static loginUrl = "http://127.0.0.1:8000/api/gettoken/";
  // static refreshApiUrl = "http://127.0.0.1:8000/api/resfresh_token/";
  // static companyApiUrl = "http://127.0.0.1:8000/api/company/";
  // static homeApiUrl = "http://127.0.0.1:8000/api/home_api/";
  // static customerRequestApiUrl = "http://127.0.0.1:8000/api/customer_request/";
  // static medicineNameApiUrl = "http://127.0.0.1:8000/api/medicinebyname/";
  // static companyBankApiUrl = "http://127.0.0.1:8000/api/companybank/";
  // static generateBillApiUrl = "http://127.0.0.1:8000/api/generate_bill_api/";
  // static companyAccountApiUrl = "http://127.0.0.1:8000/api/companyaccount/";
  // static companyOnly = "http://127.0.0.1:8000/api/companyonly/";
  // static employeeApiURL = "http://127.0.0.1:8000/api/employee/";
  // static medicineApiUrl = "http://127.0.0.1:8000/api/medicine/";
  // static employeeBankApiUrl = "http://127.0.0.1:8000/api/employee_all_bank/";
  // static employeeBankApiUrlBYID =
  //   "http://127.0.0.1:8000/api/employee_bankby_id/";
  // static employeeSalaryApiUrl =
  //   "http://127.0.0.1:8000/api/employee_all_salary/";
  // static employeeSalaryByIdApiUrl =
  //   "http://127.0.0.1:8000/api/employee_salaryby_id/";
  static homeUrl = "/home";
  static logoutPageUrl = "/logout";

  static sidebarItem = [
    { index: "0", title: "Home", url: "/home", icons: "home" },
    { index: "1", title: "Company", url: "/company", icons: "assessment" },
    {
      index: "2",
      title: "Add Medicine",
      url: "/addMedicine",
      icons: "assessment",
    },
    {
      index: "3",
      title: "Manage Medicine",
      url: "/manageMedicine",
      icons: "assessment",
    },
    {
      index: "4",
      title: "Manage Company Account",
      url: "/manageCompanyAccount",
      icons: "assessment",
    },
    {
      index: "5",
      title: "Manage Employee",
      url: "/employeeManage",
      icons: "assessment",
    },
    {
      index: "6",
      title: "Generate Bill",
      url: "/generateBill",
      icons: "assessment",
    },
    {
      index: "7",
      title: "Customer Request",
      url: "/customerRequest",
      icons: "assessment",
    },
  ];
}

export default Config;
