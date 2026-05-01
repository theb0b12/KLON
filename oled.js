module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "SSD1306_128x64OLED"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" thru_hole oval (at -3.62 ${flipN(flip, -10.6)} ${flipR(flip, p.r + 90)}) (size 2 1.6) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P1})`);
fp.push(`(pad "2" thru_hole oval (at -1.08 ${flipN(flip, -10.6)} ${flipR(flip, p.r + 90)}) (size 2 1.6) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P2})`);
fp.push(`(pad "3" thru_hole oval (at 1.46 ${flipN(flip, -10.6)} ${flipR(flip, p.r + 90)}) (size 2 1.6) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P3})`);
fp.push(`(pad "4" thru_hole oval (at 4 ${flipN(flip, -10.6)} ${flipR(flip, p.r + 90)}) (size 2 1.6) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P4})`);

// Drawings on F.Fab
fp.push(`(fp_text value "SSD1306_128x64OLED" (at -7.747 ${flipN(flip, -7.62)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on B.SilkS
fp.push(`(fp_rect (start -13.5 ${flipN(flip, -12.3)}) (end 13.9 ${flipN(flip, 15)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start -4.8 ${flipN(flip, -11.8)}) (end 5.2 ${flipN(flip, -9.4)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start -12.95 ${flipN(flip, -9)}) (end 13.45 ${flipN(flip, 7.6)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) (fill none) )`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "SSD1306" (at 0 ${flipN(flip, 0.254)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_rect (start 13.95 ${flipN(flip, -12.3)}) (end -13.45 ${flipN(flip, 15)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start 13.4 ${flipN(flip, -9)}) (end -13 ${flipN(flip, 7.6)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) (fill none) )`);
fp.push(`(fp_rect (start 5.25 ${flipN(flip, -11.8)}) (end -4.75 ${flipN(flip, -9.4)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) (fill none) )`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }