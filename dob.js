// Add date of birth field
var dob = this.addField("dob", "text", 0, [100, 720, 300, 740]);
dob.textSize = 12;
dob.textFont = font.Helv;
dob.value = "Date of birth (DD/MM/YYYY)";
dob.alignment = "center";

// Add nationality field
var nationality = this.addField("nationality", "text", 0, [100, 680, 300, 700]);
nationality.textSize = 12;
nationality.textFont = font.Helv;
nationality.value = "Nationality";
nationality.alignment = "center";

// Add label for beneficiary rights question
var beneficiaryLabel = this.addField("beneficiaryLabel", "text", 0, [100, 660, 500, 680]);
beneficiaryLabel.textSize = 12;
beneficiaryLabel.textFont = font.Helv;
beneficiaryLabel.value = "Has/Have the beneficiary/-ies an actual right to claim a distribution?";
beneficiaryLabel.readonly = true;
beneficiaryLabel.alignment = "center";
beneficiaryLabel.borderStyle = border.s;

// Add yes checkbox
var yesCheckbox = this.addField("yesCheckbox", "checkbox", 0, [100, 640, 115, 655]);
yesCheckbox.textSize = 12;
yesCheckbox.textFont = font.Helv;

// Add yes label
var yesLabel = this.addField("yesLabel", "text", 0, [120, 640, 140, 655]);
yesLabel.textSize = 12;
yesLabel.textFont = font.Helv;
yesLabel.value = "Yes";
yesLabel.readonly = true;
yesLabel.borderStyle = border.s;

// Add no checkbox
var noCheckbox = this.addField("noCheckbox", "checkbox", 0, [160, 640, 175, 655]);
noCheckbox.textSize = 12;
noCheckbox.textFont = font.Helv;

// Add no label
var noLabel = this.addField("noLabel", "text", 0, [180, 640, 200, 655]);
noLabel.textSize = 12;
noLabel.textFont = font.Helv;
noLabel.value = "No";
noLabel.readonly = true;
noLabel.borderStyle = border.s;

// Add text area for additional information
var beneficiaries = this.addField("beneficiaries", "text", 0, [100, 500, 400, 620]);
beneficiaries.textSize = 12;
beneficiaries.textFont = font.Helv;
beneficiaries.multiline = true;
beneficiaries.value = "b) and in addition to certain beneficiaries or if no beneficiary/-ies has/have been determined, pertaining to (a) group(s) of beneficiaries (e.g. descendants of the settlor) known at the time of the signing of this form:";
beneficiaries.defaultValue = beneficiaries.value;
beneficiaries.alignment = "left";
