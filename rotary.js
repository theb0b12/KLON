module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    A: { type: 'net', value: undefined },
    B: { type: 'net', value: undefined },
    C: { type: 'net', value: undefined },
    MP: { type: 'net', value: undefined },
    S1: { type: 'net', value: undefined },
    S2: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "RotaryEncoder_Alps_EC11E-Switch_Vertical_H20mm-keebio_modified"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "Alps rotary encoder, EC12E... with switch, vertical shaft, http://www.alps.com/prod/info/E/HTML/Encoder/Incremental/EC11/EC11E15204A3.html")`);
fp.push(`(tags "rotary encoder")`);
fp.push(`(attr through_hole)`);

// Unknown to kicad2ergogen

// Pads
fp.push(`(pad "A" thru_hole circle (at -7.5 ${flipN(flip, -2.5)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask")  ${p.A})`);
fp.push(`(pad "B" thru_hole circle (at -7.5 ${flipN(flip, 2.5)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask")  ${p.B})`);
fp.push(`(pad "C" thru_hole circle (at -7.5 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask")  ${p.C})`);
fp.push(`(pad "MP" thru_hole rect (at 0 ${flipN(flip, 5.6)} ${flipR(flip, p.r + 0)}) (size 3.2 2) (drill oval 2.8 1.5) (layers "*.Cu" "*.Mask")  ${p.MP})`);
fp.push(`(pad "MP" thru_hole rect (at 0 ${flipN(flip, -5.6)} ${flipR(flip, p.r + 0)}) (size 3.2 2) (drill oval 2.8 1.5) (layers "*.Cu" "*.Mask")  ${p.MP})`);
fp.push(`(pad "S1" thru_hole circle (at 7 ${flipN(flip, 2.5)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask")  ${p.S1})`);
fp.push(`(pad "S2" thru_hole circle (at 7 ${flipN(flip, -2.5)} ${flipR(flip, p.r + 0)}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask")  ${p.S2})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start 8.5 ${flipN(flip, 7.1)}) (end -9 ${flipN(flip, 7.1)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start 8.5 ${flipN(flip, 7.1)}) (end 8.5 ${flipN(flip, -7.1)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start -9 ${flipN(flip, -7.1)}) (end 8.5 ${flipN(flip, -7.1)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);
fp.push(`(fp_line (start -9 ${flipN(flip, -7.1)}) (end -9 ${flipN(flip, 7.1)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05) )`);

// Drawings on F.Fab
fp.push(`(fp_text value "Rotary_Encoder_Switch" (at 0 ${flipN(flip, 7.9)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start -6 ${flipN(flip, -4.7)}) (end -5 ${flipN(flip, -5.8)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start 6 ${flipN(flip, 5.8)}) (end -6 ${flipN(flip, 5.8)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start -3 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 0)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start -5 ${flipN(flip, -5.8)}) (end 6 ${flipN(flip, -5.8)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start -6 ${flipN(flip, 5.8)}) (end -6 ${flipN(flip, -4.7)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start 0 ${flipN(flip, -3)}) (end 0 ${flipN(flip, 3)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_line (start 6 ${flipN(flip, -5.8)}) (end 6 ${flipN(flip, 5.8)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) )`);
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 0)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.12) (fill none) )`);

// Drawings on B.SilkS
fp.push(`(fp_line (start -6.1 ${flipN(flip, -5.9)}) (end -6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, -5.9)}) (end 6.1 ${flipN(flip, -3.5)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 2 ${flipN(flip, -5.9)}) (end 6.1 ${flipN(flip, -5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -2 ${flipN(flip, -5.9)}) (end -6.1 ${flipN(flip, -5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, 3.5)}) (end 6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -0.5 ${flipN(flip, 0)}) (end 0.5 ${flipN(flip, 0)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, -1.3)}) (end 6.1 ${flipN(flip, 1.3)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 0 ${flipN(flip, -0.5)}) (end 0 ${flipN(flip, 0.5)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, 5.9)}) (end 2 ${flipN(flip, 5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -2 ${flipN(flip, 5.9)}) (end -6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) )`);
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 0)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.12) (fill none) )`);

// Drawings on F.SilkS
fp.push(`(fp_text reference "SW25" (at 4.24 ${flipN(flip, 4.6)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") hide (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, -1.3)}) (end 6.1 ${flipN(flip, 1.3)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 0 ${flipN(flip, -0.5)}) (end 0 ${flipN(flip, 0.5)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -0.5 ${flipN(flip, 0)}) (end 0.5 ${flipN(flip, 0)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -2 ${flipN(flip, -5.9)}) (end -6.1 ${flipN(flip, -5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, 3.5)}) (end 6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, -5.9)}) (end 6.1 ${flipN(flip, -3.5)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 6.1 ${flipN(flip, 5.9)}) (end 2 ${flipN(flip, 5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -6.1 ${flipN(flip, -5.9)}) (end -6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start -2 ${flipN(flip, 5.9)}) (end -6.1 ${flipN(flip, 5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_line (start 2 ${flipN(flip, -5.9)}) (end 6.1 ${flipN(flip, -5.9)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) )`);
fp.push(`(fp_circle (center 0 ${flipN(flip, 0)}) (end 3 ${flipN(flip, 0)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.12) (fill none) )`);

// 3D Models
fp.push(`(model "\${KISYS3DMOD}/Rotary_Encoder.3dshapes/RotaryEncoder_Alps_EC11E-Switch_Vertical_H20mm.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

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

