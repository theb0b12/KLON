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

fp.push(`(footprint "jumper"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr exclude_from_pos_files exclude_from_bom)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd custom (at 0.275 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 0.2 0.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 ${flipN(flip, -0.625)}) (xy -0.25 ${flipN(flip, -0.625)}) (xy 0.25 ${flipN(flip, 0)}) (xy -0.25 ${flipN(flip, 0.625)}) (xy -0.5 ${flipN(flip, 0.625)})) (width 0) (fill yes)))  ${p.P1})`);
fp.push(`(pad "1" smd custom (at 0.275 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 0.2 0.2) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.5 ${flipN(flip, 0.625)}) (xy -0.25 ${flipN(flip, 0.625)}) (xy 0.25 ${flipN(flip, 0)}) (xy -0.25 ${flipN(flip, -0.625)}) (xy -0.5 ${flipN(flip, -0.625)})) (width 0) (fill yes)))  ${p.P1})`);
fp.push(`(pad "2" smd custom (at -0.45 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 0.2 0.2) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 ${flipN(flip, -0.625)}) (xy 0.5 ${flipN(flip, -0.625)}) (xy 0.5 ${flipN(flip, 0.625)}) (xy -0.65 ${flipN(flip, 0.625)}) (xy -0.15 ${flipN(flip, 0)})) (width 0) (fill yes)))  ${p.P2})`);
fp.push(`(pad "2" smd custom (at -0.45 ${flipN(flip, 0)} ${flipR(flip, p.r + 180)}) (size 0.2 0.2) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (zone_connect 2) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.65 ${flipN(flip, 0.625)}) (xy 0.5 ${flipN(flip, 0.625)}) (xy 0.5 ${flipN(flip, -0.625)}) (xy -0.65 ${flipN(flip, -0.625)}) (xy -0.15 ${flipN(flip, 0)})) (width 0) (fill yes)))  ${p.P2})`);

// Properties
// fp.push(`(property "Reference" "MCU1" (at 0 ${flipN(flip, -15)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "Val**" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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