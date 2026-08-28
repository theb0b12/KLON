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

fp.push(`(footprint "MJ-4PP-9"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "" np_thru_hole circle (at -1.75 ${flipN(flip, 8.5)} ${flipR(flip, p.r + 0)}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 8.5)} ${flipR(flip, p.r + 0)}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") )`);
fp.push(`(pad "" np_thru_hole circle (at -1.75 ${flipN(flip, 1.5)} ${flipR(flip, p.r + 0)}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") )`);
fp.push(`(pad "" np_thru_hole circle (at 0 ${flipN(flip, 1.5)} ${flipR(flip, p.r + 0)}) (size 1.2 1.2) (drill 1.2) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") )`);
fp.push(`(pad "1" thru_hole oval (at -3.85 ${flipN(flip, 10.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") (clearance 0.15)  ${p.P1})`);
fp.push(`(pad "1" thru_hole oval (at 2.1 ${flipN(flip, 10.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") (clearance 0.15)  ${p.P1})`);
fp.push(`(pad "2" thru_hole oval (at 2.1 ${flipN(flip, 6.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS")  ${p.P2})`);
fp.push(`(pad "2" thru_hole oval (at -3.85 ${flipN(flip, 6.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS")  ${p.P2})`);
fp.push(`(pad "3" thru_hole oval (at -3.85 ${flipN(flip, 3.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS")  ${p.P3})`);
fp.push(`(pad "3" thru_hole oval (at 2.1 ${flipN(flip, 3.3)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS")  ${p.P3})`);
fp.push(`(pad "4" thru_hole oval (at -2.1 ${flipN(flip, 11.8)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") (clearance 0.15)  ${p.P4})`);
fp.push(`(pad "4" thru_hole oval (at 0.35 ${flipN(flip, 11.8)} ${flipR(flip, p.r + 0)}) (size 1.7 2.5) (drill oval 1 1.5) (layers "*.Cu" "*.Mask" "${(flip ? "B" : "F")}.SilkS") (clearance 0.15)  ${p.P4})`);

// Drawings on F.Fab
fp.push(`(fp_text reference "J1" (at -0.889 ${flipN(flip, 6.4135)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text value "MJ-4PP-9" (at 0 ${flipN(flip, 14)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on B.SilkS
fp.push(`(fp_text user "TRRS" (at -0.8255 ${flipN(flip, 6.4135)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? "" : " mirror"})) )`);
fp.push(`(fp_line (start -4.75 ${flipN(flip, 0)}) (end 1.25 ${flipN(flip, 0)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start -4.75 ${flipN(flip, 12)}) (end -4.75 ${flipN(flip, 0)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start 1.25 ${flipN(flip, 0)}) (end 1.25 ${flipN(flip, 12)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start 1.25 ${flipN(flip, 12)}) (end -4.75 ${flipN(flip, 12)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.15) )`);

// Drawings on F.SilkS
fp.push(`(fp_text user "TRRS" (at -0.75 ${flipN(flip, 6.45)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -3 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 0)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start 3 ${flipN(flip, 12)}) (end -3 ${flipN(flip, 12)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start 3 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 12)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.15) )`);
fp.push(`(fp_line (start -3 ${flipN(flip, 12)}) (end -3 ${flipN(flip, 0)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.15) )`);

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

