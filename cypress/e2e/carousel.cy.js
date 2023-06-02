describe("Carousel Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.demoblaze.com");
  });

  it("should display the carousel indicators", () => {
    cy.get(".carousel-indicators").should("be.visible");
    cy.get(".carousel-indicators > li").should("have.length", 3);
  });

  it("should navigate to the next slide", () => {
    cy.get(".carousel-item").then(($slides) => {
      const initialSlideOrder = Array.from($slides).map(
        (slide) => slide.innerText
      );

      cy.get(".carousel-control-next").click();

      cy.get(".carousel-item").then(($newSlides) => {
        const newSlideOrder = Array.from($newSlides).map(
          (slide) => slide.innerText
        );

        expect(newSlideOrder).to.not.deep.equal(initialSlideOrder);
      });
    });
  });

  it("should navigate to the previous slide", () => {
    cy.get(".carousel-item").then(($slides) => {
      const initialSlideOrder = Array.from($slides).map(
        (slide) => slide.innerText
      );

      cy.get(".carousel-control-prev").click();

      cy.get(".carousel-item").then(($newSlides) => {
        const newSlideOrder = Array.from($newSlides).map(
          (slide) => slide.innerText
        );

        expect(newSlideOrder).to.not.deep.equal(initialSlideOrder);
      });
    });
  });

  it("should autoplay the carousel", () => {
    cy.wait(5000);

    cy.get(".carousel-item.active").then(($activeSlide) => {
      const activeSlideIndex = $activeSlide.index();
      cy.wait(5000);
      cy.get(".carousel-item.active").should(($newActiveSlide) => {
        expect($newActiveSlide.index()).not.to.equal(activeSlideIndex);
      });
    });
  });

  it("should navigate to a specific slide", () => {
    cy.get(".carousel-indicators > li").eq(1).trigger("click");
    cy.get(".carousel-item.active").should("have.class", "active");
  });
});
