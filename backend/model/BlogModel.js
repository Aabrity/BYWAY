export default class BlogModel {
  #id;
  #image;
  #description;
  #title;
  #category;
  #published_date;

  constructor(
    id = null,
    image,
    description,
    title,
    category = "Normal",
    published_date = new Date()
  ) {
    this.#id = id;
    this.#image = image;
    this.#description = this.validateWordCount(description, 200);
    this.#title = title;
    this.#category = category;
    this.#published_date = published_date;
  }

  getId() {
    return this.#id;
  }

  setId(value) {
    this.#id = value;
  }

  getImage() {
    return this.#image;
  }

  setImage(value) {
    this.#image = value;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(value) {
    this.#description = this.validateWordCount(value, 200);
  }

  getTitle() {
    return this.#title;
  }

  setTitle(value) {
    this.#title = this.validateWordCount(value, 200);
  }

  getCategory() {
    return this.#category;
  }

  setCategory(value) {
    this.#category = value;
  }

  getPublishedDate() {
    return this.#published_date;
  }

  setPublishedDate(value) {
    this.#published_date = value;
  }

  validateWordCount(text, limit) {
    const wordCount = text.split(/\s+/).filter((word) => word !== "").length;
    if (wordCount > limit) {
      throw new Error(`Text exceeds the limit of ${limit} words.`);
    }
    return text;
  }
}
