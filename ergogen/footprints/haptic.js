module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: undefined },
    P4: { type: 'net', value: undefined },
    P5: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "Pimoroni Haptic Buzz DRV2605L Driver"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Through hole straight pin header, 1x05, 2.54mm pitch, single row")`);
fp.push(`(tags "Through hole pin header THT 1x05 2.54mm single row")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" thru_hole circle (at -5.08 ${flipN(flip, 10.4)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P1})`);
fp.push(`(pad "2" thru_hole oval (at -2.54 ${flipN(flip, 10.4)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P2})`);
fp.push(`(pad "3" thru_hole oval (at 0 ${flipN(flip, 10.4)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P3})`);
fp.push(`(pad "4" thru_hole oval (at 2.54 ${flipN(flip, 10.4)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P4})`);
fp.push(`(pad "5" thru_hole oval (at 5.08 ${flipN(flip, 10.4)} ${flipR(flip, p.r + 90)}) (size 1.7 1.7) (drill 1) (layers "*.Cu" "*.Mask")  ${p.P5})`);

// Drawings on B.CrtYd
fp.push(`(fp_rect (start -6.3 ${flipN(flip, 11.5)}) (end 6.3 ${flipN(flip, 9.3)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.12) (fill none) )`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start -6.3 ${flipN(flip, 11.5)}) (end 6.3 ${flipN(flip, 9.3)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.12) (fill none) )`);

// Drawings on F.Fab
fp.push(`(fp_text value "Pimoroni Haptic Buzz DRV2605L Driver" (at 0 ${flipN(flip, 12.49)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 ${flipN(flip, 5.08)} ${flipR(flip, p.r + 90) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "REF**" (at 0 ${flipN(flip, -2.33)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);

// Drawings on Dwgs.User
fp.push(`(fp_line (start -7 ${flipN(flip, -6.25)}) (end -7 ${flipN(flip, 4.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start -7 ${flipN(flip, 4.75)}) (end 7 ${flipN(flip, 4.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 7.5 ${flipN(flip, 7)}) (end 7.5 ${flipN(flip, 11)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start -9.5 ${flipN(flip, -11)}) (end -9.5 ${flipN(flip, 5.5)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start -8.75 ${flipN(flip, 6.25)}) (end -8.25 ${flipN(flip, 6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 8.75 ${flipN(flip, 6.25)}) (end 8.25 ${flipN(flip, 6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 8.75 ${flipN(flip, -11.75)}) (end -8.75 ${flipN(flip, -11.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 7 ${flipN(flip, 4.75)}) (end 7 ${flipN(flip, -6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start -7.5 ${flipN(flip, 11)}) (end -7.5 ${flipN(flip, 7)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 9.5 ${flipN(flip, 5.5)}) (end 9.5 ${flipN(flip, -11)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start 7 ${flipN(flip, -6.25)}) (end -7 ${flipN(flip, -6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_line (start -6.75 ${flipN(flip, 11.75)}) (end 6.75 ${flipN(flip, 11.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start -8.75 ${flipN(flip, 6.25)}) (mid -9.28033 ${flipN(flip, 6.03033)}) (end -9.5 ${flipN(flip, 5.5)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start -9.5 ${flipN(flip, -11)}) (mid -9.28033 ${flipN(flip, -11.53033)}) (end -8.75 ${flipN(flip, -11.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start -6.75 ${flipN(flip, 11.75)}) (mid -7.28033 ${flipN(flip, 11.53033)}) (end -7.5 ${flipN(flip, 11)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start 7.5 ${flipN(flip, 11)}) (mid 7.28033 ${flipN(flip, 11.53033)}) (end 6.75 ${flipN(flip, 11.75)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start -8.25 ${flipN(flip, 6.25)}) (mid -7.71967 ${flipN(flip, 6.46967)}) (end -7.5 ${flipN(flip, 7)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start 7.5 ${flipN(flip, 7)}) (mid 7.71967 ${flipN(flip, 6.46967)}) (end 8.25 ${flipN(flip, 6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start 9.5 ${flipN(flip, 5.5)}) (mid 9.28033 ${flipN(flip, 6.03033)}) (end 8.75 ${flipN(flip, 6.25)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_arc (start 8.75 ${flipN(flip, -11.75)}) (mid 9.28033 ${flipN(flip, -11.53033)}) (end 9.5 ${flipN(flip, -11)}) (layer "Dwgs.User") (width 0.12) )`);
fp.push(`(fp_circle (center -6.75 ${flipN(flip, -9)}) (end -5.5 ${flipN(flip, -9)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);
fp.push(`(fp_circle (center 6.75 ${flipN(flip, -9)}) (end 8 ${flipN(flip, -9)}) (layer "Dwgs.User") (width 0.12) (fill none) )`);

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

