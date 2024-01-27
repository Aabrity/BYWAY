import { JSDOM } from "jsdom";

export default class PackageModel {
  #package_id;
  #package_title;
  #location_id;
  #about;
  #guidance_language;
  #whats_included;
  #what_to_expect;
  #departure_and_return;
  #accessibility;
  #additional_info;
  #price;
  #discount;
  #image1;
  #image2;
  #image3;
  #image4;

  constructor(
    package_id = null,
    package_title,
    location_id,
    about,
    guidance_language,
    whats_included,
    what_to_expect,
    departure_and_return,
    accessibility,
    additional_info,
    price,
    discount,
    image1,
    image2 = null,
    image3 = null,
    image4 = null
  ) {
    this.#package_id = package_id;
    this.#package_title = package_title;
    this.#location_id = location_id;
    this.about = about;
    this.guidance_language = guidance_language;
    this.whats_included = whats_included;
    this.what_to_expect = what_to_expect;
    this.departure_and_return = departure_and_return;
    this.accessibility = accessibility;
    this.additional_info = additional_info;
    this.#price = price;
    this.#discount = discount;
    this.#image1 = image1;
    this.#image2 = image2;
    this.#image3 = image3;
    this.#image4 = image4;
  }

  getPackage_id() {
    return this.#package_id;
  }

  setPackage_id(value) {
    this.#package_id = value;
  }

  getPackage_title() {
    return this.#package_title;
  }

  setPackage_title(value) {
    this.#package_title = value;
  }

  getLocation_id() {
    return this.#location_id;
  }

  setLocation_id(value) {
    this.#location_id = value;
  }

  getAbout() {
    return this.#about;
  }

  setAbout(value) {
    this.#about = this.validateWordCount(value, 150);
  }

  getGuidance_language() {
    return this.#guidance_language;
  }

  setGuidance_language(value) {
    this.#guidance_language = this.validateCharacterCount(value, 60);
  }

  getWhats_included() {
    return this.#whats_included;
  }

  setWhats_included(value) {
    this.#whats_included = this.validateWordCount(value, 150);
  }

  getWhat_to_expect() {
    return this.#what_to_expect;
  }

  setWhat_to_expect(value) {
    this.#what_to_expect = this.validateWordCount(value, 150);
  }

  getDeparture_and_return() {
    return this.#departure_and_return;
  }

  setDeparture_and_return(value) {
    this.#departure_and_return = this.validateWordCount(value, 150);
  }

  getAccessibility() {
    return this.#accessibility;
  }

  setAccessibility(value) {
    this.#accessibility = this.validateWordCount(value, 150);
  }

  getAdditional_info() {
    return this.#additional_info;
  }

  setAdditional_info(value) {
    this.#additional_info = this.validateWordCount(value, 150);
  }

  getPrice() {
    return this.#price;
  }

  setPrice(value) {
    this.#price = value;
  }

  getDiscount() {
    return this.#discount;
  }

  setDiscount(value) {
    this.#discount = value;
  }

  getImage1() {
    return this.#image1;
  }

  setImage1(value) {
    this.#image1 = value;
  }

  getImage2() {
    return this.#image2;
  }

  setImage2(value) {
    this.#image2 = value;
  }

  getImage3() {
    return this.#image3;
  }

  setImage3(value) {
    this.#image3 = value;
  }

  getImage4() {
    return this.#image4;
  }

  setImage4(value) {
    this.#image4 = value;
  }

  validateCharacterCount(text, limit) {
    if (text.length > limit) {
      throw new Error(`Text exceeds the limit of ${limit} characters.`);
    }
    return text;
  }

  validateWordCount(text, limit) {
    const wordCount = this.stripHTMLTags(text)
      .split(/\s+/)
      .filter((word) => word !== "").length;
    if (wordCount > limit) {
      throw new Error(`Text exceeds the limit of ${limit} words.`);
    }
    return text;
  }

  stripHTMLTags(html) {
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    return doc.body.textContent || "";
  }
}

