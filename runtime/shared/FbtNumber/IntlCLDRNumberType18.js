/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<559973184f19e83b9a2a8a5074511e07>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow
 */
const IntlVariations = require('IntlVariations');
const IntlCLDRNumberType18 = {
  getVariation(n: number): number {
    if (n === 0 || n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n >= 2 && n <= 10) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType18;
