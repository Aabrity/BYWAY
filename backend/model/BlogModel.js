export default class BlogModel {
  #id;
  #image;
  #description;
  #title;
  #category;

  constructor(id, image, description, title, category) {
    this.#id = id;
    this.#image = image;
    this.setDescription(description);
    this.#title = title;
    this.#category = category;
  }

  validateInput(input) {
    let strippedInput = input.replace(/(<([^>]+)>)/gi, ""); 
    let wordCount = strippedInput.split(" ").filter(function (n) {
      return n != "";
    }).length; 
    return wordCount;
  }

  getId() {
    return this.#id;
  }

  getImage() {
    return this.#image;
  }

  getDescription() {
    return this.#description;
  }

  getTitle() {
    return this.#title;
  }

  getCategory() {
    return this.#category;
  }

  setId(id) {
    this.#id = id;
  }

  setImage(image) {
    this.#image = image;
  }

  setDescription(description) {
    if (this.validateInput(description) <= 500) {
      this.#description = description;
    } else {
      throw new Error("Description exceeds the maximum word count.");
    }
  }

  setTitle(title) {
    this.#title = title;
  }

  setCategory(category) {
    this.#category = category;
  }
}
