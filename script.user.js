// ==UserScript==
// @name 💩-Cloud
// @version 1.0
// @description made with sh*t in potsdam
// @include https://schul-cloud.org/*
// @downloadURL https://raw.githubusercontent.com/karlbeecken/made-with-poop-in-potsdam/master/script.user.js
// @updateURL https://raw.githubusercontent.com/karlbeecken/made-with-poop-in-potsdam/master/script.user.js
// ==/UserScript==

// modify footer to correct the given false statements, there is no ❤️ anymore!

document.getElementsByClassName('made-with-love')[0].innerHTML = "Made with <span class=\"heart\">💩</span> in Potsdam"

document.getElementsByClassName("imprint")[0].children.item(0).children.item(1).innerHTML = "&copy; 2020 💩-Cloud"

// modify logo

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`
aside.nav-sidebar .sc-branding .cloud-logo {
	display: inline-block;
	vertical-align: top;
	width: 100%;
	height: 100%;
	margin-top: 5px;
	margin-bottom: -5px;
	margin-right: .25rem;
	background: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='340' height='60' fill='%23fff' fill-rule='evenodd' version='1.1' id='svg3767' sodipodi:docname='schul-cloud-logo.svg' inkscape:version='0.92.4 5da689c313, 2019-01-14'%3E%3Cmetadata id='metadata3773'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cdefs id='defs3771' /%3E%3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='1366' inkscape:window-height='703' id='namedview3769' showgrid='false' inkscape:zoom='2.4249603' inkscape:cx='144.64292' inkscape:cy='54.52978' inkscape:window-x='0' inkscape:window-y='0' inkscape:window-maximized='1' inkscape:current-layer='svg3767' /%3E%3Cpath d='M140.314 22.76l-7.7 7.693c-1.202 1.2-1.485 2.753-.707 3.53s2.332.494 3.533-.706l7.324-7.316 1.364.65-7.68 7.67a2.464 2.464 0 00-.706 1.977l-5.23 1.835-2.824-2.82 1.836-5.226a2.48 2.48 0 001.98-.705l8.247-8.238.566 1.656zm5.94 5.257c2.974 2.343 4.747 5.633 4.747 9.15 0 7.087-6.896 12.778-15.392 12.778H90.134c-6.896 0-12.293.7-16.5-2.895-5.997-4.492-1.9-18.07 13.392-15.074 0-7.487 7.795-11.88 16.09-8.585 1.3-8.086 9.794-13.078 18.4-13.377 6.664-.232 13.433 2.373 17.077 8.713l-9.78 9.77c-.212.21-.565.707-.635 1.06l-4.073 10.05a1.48 1.48 0 00-.145.773c-.703.438-1.396 1.06-1.83 1.29-1.817.97-3.39.55-4.913-.75-1.5-1.27-2.61-2.922-4.304-3.96-1.592-.973-3.38-1.295-5.145-.6-1.797.708-3.035 2.013-4.35 3.364-1.145 1.176-2.7 2.73-4.5 2.517-1.7-.202-2.822-2.03-4.02-3.07-1.298-1.13-2.888-1.826-4.618-1.336-1.547.44-2.71 1.55-3.898 2.566-.472.403-1.164.84-1.08 1.558.093.794.976 1.06 1.625.77.634-.284 1.013-.88 1.492-1.345.6-.584 1.36-1.166 2.15-1.463 1.793-.673 3.046.796 4.167 1.97 1.095 1.148 2.3 2.232 3.97 2.353 1.706.124 3.266-.69 4.552-1.735 2.112-1.72 4.51-5.63 7.695-4.36 3.61 1.44 5.36 6.748 9.876 6.073.736-.11 3.546-1.243 4.786-2.402.183-.017.368-.06.553-.15l10.06-4.07c.355-.07.85-.422 1.062-.634l8.96-8.948z' id='path3763' /%3E%3Cpath d='m 30.546,43.123 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 26.62 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 33.025 h -9.372 v 10.098 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 12.66 C 12.295492,43.783 12,43.487508 12,43.123 V 19.9 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 V 29 h 9.372 v -9.1 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 V 43.132 Z M 52.566,26.92 c 0,5.84 -4.422,7.722 -9.504,7.722 -0.858,0 -2.178,-0.1 -2.937,-0.132 v 8.613 c 0,0.363 -0.264,0.66 -0.627,0.66 h -3.3 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 20.42 c 0,-0.66 0.396,-0.9 1.056,-1 1.716,-0.264 4.06,-0.43 6.468,-0.43 5.082,0 9.504,1.782 9.504,7.623 v 0.297 z m -4.554,0 v -0.297 c 0,-2.772 -1.65,-3.828 -4.95,-3.828 -0.693,0 -2.343,0.066 -2.937,0.132 v 7.854 c 0.978346,0.05037 1.957494,0.08371 2.937,0.1 3.564,0 4.95,-1.32 4.95,-3.96 z m 12.995,16.203 c 0,0.364508 -0.295492,0.66 -0.66,0.66 H 57.08 c -0.364508,0 -0.66,-0.295492 -0.66,-0.66 V 19.9 c 0,-0.363 0.297,-0.627 0.66,-0.627 h 3.267 c 0.363,0 0.66,0.264 0.66,0.627 v 23.232 z m 185.011,-8.328 c 0,0.33 -0.264,0.56 -0.627,0.56 h -6.567 c -0.363,0 -0.627,-0.198 -0.627,-0.56 V 33.52 c 0,-0.33 0.264,-0.594 0.627,-0.594 h 6.567 c 0.363,0 0.627,0.23 0.627,0.594 v 1.287 z m 19.024,8.15 c 0,0.396 -0.297,0.594 -0.66,0.66 -1.386,0.264 -2.673,0.43 -5.478,0.43 -4.06,0 -8.712,-2.178 -8.712,-10.197 V 29.26 c 0,-8.085 4.653,-10.197 8.712,-10.197 2.08,0 4.092,0.297 5.544,0.528 0.297,0.033 0.528,0.132 0.528,0.43 v 1.683 c 0,0.198 -0.066,0.363 -0.396,0.363 h -0.1 c -1.188,-0.1 -3.63,-0.297 -5.544,-0.297 -3.234,0 -5.742,1.88 -5.742,7.5 v 4.587 c 0,5.544 2.508,7.5 5.742,7.5 1.88,0 4.257,-0.165 5.445,-0.264 h 0.132 c 0.363,0 0.528,0.165 0.528,0.528 v 1.353 z m 6.83,0.198 c 0,0.33 -0.23,0.66 -0.594,0.66 h -1.716 c -0.33,0 -0.594,-0.297 -0.594,-0.66 v -23.53 c 0,-0.33 0.23,-0.627 0.594,-0.627 h 1.716 c 0.33,0 0.594,0.264 0.594,0.627 z m 18.918,-7.16 c 0,4.85 -2.508,8.052 -7.36,8.052 -4.852,0 -7.326,-3.2 -7.326,-8.052 v -2.508 c 0,-4.85 2.475,-8.052 7.326,-8.052 4.851,0 7.36,3.2 7.36,8.052 z m -2.904,0 v -2.508 c 0,-3.366 -1.353,-5.5 -4.455,-5.5 -3.07,0 -4.422,2.112 -4.422,5.5 v 2.508 c 0,3.366 1.32,5.5 4.422,5.5 3.07,0 4.455,-2.112 4.455,-5.5 z m 20.855,7.16 c 0,0.363 -0.264,0.66 -0.627,0.66 h -1.65 c -0.363,0 -0.627,-0.297 -0.627,-0.66 v -0.627 c -1.815,1.023 -3.3,1.518 -5.247,1.518 -3.96,0 -5.742,-2.475 -5.742,-6.864 V 26.326 c 0,-0.364508 0.29549,-0.66 0.66,-0.66 h 1.584 c 0.36451,0 0.66,0.295492 0.66,0.66 v 10.857 c 0,3.333 1.122,4.356 3.63,4.356 1.386,0 2.937,-0.528 4.455,-1.287 V 26.326 c 0,-0.33 0.297,-0.66 0.66,-0.66 h 1.617 c 0.33,0 0.627,0.297 0.627,0.66 v 16.83 z m 18.103,-0.43 c 0,0.43 -0.1,0.66 -0.693,0.76 -2.046,0.396 -4.06,0.56 -6.072,0.56 -4.917,0 -7.194,-3.2 -7.194,-8.15 V 33.52 c 0,-5.18 2.376,-8.085 7.194,-8.085 1.29378,0.0061 2.58496,0.116412 3.861,0.33 v -6.138 c 0,-0.33 0.264,-0.627 0.627,-0.627 h 1.683 c 0.33,0 0.594,0.264 0.594,0.627 v 23.1 z m -2.904,-1.42 v -13.1 c -1.1,-0.198 -2.805,-0.23 -3.86,-0.23 -3.234,0 -4.3,2.013 -4.3,5.544 v 2.376 c 0,3.597 1.023,5.6 4.3,5.6 1.122,0 2.74,-0.1 3.86,-0.198 z' id='path3765' inkscape:connector-curvature='0' style='fill-rule:nonzero' sodipodi:nodetypes='csssccssssssssccssssccsscssssscsscscsscccsccssssssscccsssssssccccsssscssscsssscssccssssssssssssssssssssssscssscsssssssscssssccccsssccssssccccsssscc' /%3E%3Cg id='图层_2' transform='translate(66.929314,-24.704989)'%3E%3Cg id='g3860'%3E%3Cpath id='path3842' style='fill:%23865d53;stroke-width:0.45504001' d='m 153.91519,59.716717 c -0.5961,-1.237709 -1.57443,-2.516371 -3.17163,-3.335443 -1.07844,-0.67346 -2.07953,-1.01929 -2.73479,-1.196756 0.69621,-2.548224 -0.29122,-4.577702 -1.6791,-6.092985 -2.06133,-2.220595 -4.21822,-2.543674 -4.21822,-2.543674 h -0.004 c 0.70987,-1.378771 0.97834,-2.975961 0.61886,-4.545849 -0.45504,-1.938471 -1.49708,-3.157978 -2.87131,-3.9725 -1.40607,-0.832723 -3.14432,-1.242259 -4.92808,-1.560787 -0.85547,-0.154713 -4.46394,-0.659808 -5.96102,-2.73024 -1.20586,-1.679097 -1.24226,-4.700563 -1.56989,-5.606093 -0.35038,-0.932832 -1.53803,-0.523296 -2.8349,0.345831 -1.51528,1.010189 -4.65506,4.254624 -5.86547,7.503609 -0.92373,2.489069 -0.94648,4.645959 -0.58245,6.320506 -1.49707,0.250272 -2.62102,0.755366 -2.83489,0.855475 -0.0728,0.02275 -0.14562,0.0455 -0.22298,0.07736 -1.36966,0.56425 -4.29102,3.194381 -4.55494,7.212384 -0.091,1.428826 0.0956,2.871302 0.54604,4.21367 -1.79285,0.500544 -2.83034,1.155802 -2.84855,1.169453 -0.91008,0.34128 -2.3571,1.342368 -2.79849,1.879315 -0.89643,1.082996 -1.51984,2.370759 -1.88842,3.722228 -0.80542,2.939558 -0.50964,6.284102 0.91918,8.99614 0.79177,1.506183 1.87477,3.107924 3.06697,4.331981 3.89059,3.999802 10.60698,5.510536 15.9082,6.384214 6.45702,1.06479 13.21891,0.691656 19.26185,-1.80651 9.06439,-3.74043 11.4761,-9.756059 11.83104,-11.453358 0.79632,-3.781383 -0.16837,-7.317043 -0.58246,-8.167968 z' inkscape:connector-curvature='0' /%3E%3Cg id='g3856'%3E%3Cg id='g3848'%3E%3Cellipse id='ellipse3844' transform='rotate(-83.650318)' style='fill:%23ffffff;stroke-width:0.45505583' ry='7.0533652' rx='7.5584774' cy='144.2357' cx='-40.032246' /%3E%3Cpath id='path3846' style='fill:%232f2f2f;stroke-width:0.45504001' d='m 141.96584,55.726016 c -0.10466,1.501632 -1.42882,2.648333 -2.95321,2.557325 -1.52893,-0.08646 -2.68473,-1.383322 -2.58008,-2.884954 0.10011,-1.506182 1.41973,-2.648333 2.94866,-2.557325 1.52894,0.08646 2.68929,1.383322 2.58463,2.884954' inkscape:connector-curvature='0' /%3E%3C/g%3E%3Cg id='g3854'%3E%3Cellipse id='ellipse3850' transform='rotate(-4.3125781)' style='fill:%23ffffff;stroke-width:0.45505431' ry='7.5584526' rx='7.0533419' cy='64.545578' cx='114.60867' /%3E%3Cpath id='path3852' style='fill:%232f2f2f;stroke-width:0.45504001' d='m 122.12155,55.166317 c 0.17291,1.497081 -0.91463,2.866752 -2.42991,3.057869 -1.51984,0.195667 -2.89406,-0.864576 -3.06698,-2.357108 -0.18201,-1.497081 0.90554,-2.866752 2.42537,-3.062419 1.51528,-0.191117 2.89405,0.869127 3.07152,2.361658' inkscape:connector-curvature='0' /%3E%3C/g%3E%3C/g%3E%3Cpath id='path3858' style='fill:%23ed6d31;stroke-width:0.45504001' d='m 139.56323,66.23744 c -1.01019,-0.68256 -2.2843,-0.23207 -3.40825,0 -3.13977,0.646157 -5.89277,0.673459 -7.21694,0.673459 -1.32416,0 -4.07715,-0.0273 -7.21693,-0.673459 -1.12395,-0.23207 -2.39806,-0.68256 -3.40825,0 -1.28321,0.864576 -0.33673,3.97705 1.68365,6.079334 1.21951,1.269562 4.12721,3.735879 8.94609,3.735879 4.81432,0 7.72203,-2.466317 8.94608,-3.735879 2.01128,-2.102284 2.95776,-5.210208 1.67455,-6.079334 z' inkscape:connector-curvature='0' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	-webkit-background-size: contain;
	background-size: contain;
	background-repeat: no-repeat;
}
`)
