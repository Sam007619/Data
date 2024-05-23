class Assert{

    AssertUrl() {
        return cy
          .url()
          .should("include", "https://rahulshettyacademy.com/angularpractice/");
}
}
export default Assert