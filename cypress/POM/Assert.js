class Asserting{

    AssertUrl() {
        return cy
          .url()
          .should("include", "https://rahulshettyacademy.com/angularpractice/");
}
}
export default Asserting;