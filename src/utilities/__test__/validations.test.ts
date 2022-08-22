// @ts-nocheck
import { assert } from "chai";

import { parseTime, validateIfTimestmap } from "../validations.utility";
import { parseDate } from '../validations.utility';


describe("Test Validations utilities", () => {

  it("Validate if timestamp value", () => {
    assert.isTrue(validateIfTimestmap("12312"));
  });

  it("Validate wrong timestamp value", () => {
    assert.isFalse(validateIfTimestmap("12:31:2022T10:00"));
  });

  it("Parse time with timestamp value", () => {
    assert.equal(parseTime("4209"), '1:10');
  });


  it("Parse time with literal value", () => {
    assert.equal(parseTime("1:10"), '1:10');
  });


  it("Parse date, transform in localDateString", () => {
    const dateReceived = "Sat, 20 Aug 2022 17:43:00 -0000"
    assert.equal(parseDate(dateReceived), '8/20/2022');
  });


});