module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    P1: { type: 'net', value: undefined },
    P2: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint SolderJumper-2_P1.3mm_Bridged_Pad1.0x1.5mm`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "SMD Solder Jumper, 1x1.5mm Pads, 0.3mm gap, bridged with 1 copper strip")`);
fp.push(`(tags "solder jumper open")`);
fp.push(`(attr virtual)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "1" smd rect (at -0.65 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") ${p.P1})`);
fp.push(`(pad "2" smd rect (at 0.65 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 1 1.5) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask") ${p.P2})`);

// we dont want these silly little pieces of text for EACH jumper
// // Drawings on F.CrtYd
// fp.push(`(fp_line (start -1.65 ${flipN(flip, -1.25)}) (end 1.65 ${flipN(flip, -1.25)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start -1.65 ${flipN(flip, -1.25)}) (end -1.65 ${flipN(flip, 1.25)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start 1.65 ${flipN(flip, 1.25)}) (end 1.65 ${flipN(flip, -1.25)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
// fp.push(`(fp_line (start 1.65 ${flipN(flip, 1.25)}) (end -1.65 ${flipN(flip, 1.25)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

// // Drawings on F.Cu
// fp.push(`(fp_poly (pts (xy -0.25 ${flipN(flip, -0.3)}) (xy 0.25 ${flipN(flip, -0.3)}) (xy 0.25 ${flipN(flip, 0.3)}) (xy -0.25 ${flipN(flip, 0.3)})) (layer "${(flip ? "B.Cu" : "F.Cu")}") (width 0))`);

// // Drawings on F.Fab
// fp.push(`(fp_text value SolderJumper-2_P1.3mm_Bridged_Pad1.0x1.5mm (at 0 ${flipN(flip, 1.9)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// // Drawings on F.SilkS
// fp.push(`(fp_text reference REF** (at 0 ${flipN(flip, -1.8)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(fp_line (start -1.4 ${flipN(flip, 1)}) (end -1.4 ${flipN(flip, -1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12))`);
// fp.push(`(fp_line (start 1.4 ${flipN(flip, 1)}) (end -1.4 ${flipN(flip, 1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12))`);
// fp.push(`(fp_line (start 1.4 ${flipN(flip, -1)}) (end 1.4 ${flipN(flip, 1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12))`);
// fp.push(`(fp_line (start -1.4 ${flipN(flip, -1)}) (end 1.4 ${flipN(flip, -1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12))`);

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

