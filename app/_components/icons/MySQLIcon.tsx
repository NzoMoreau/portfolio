import { ComponentProps, ComponentPropsWithRef } from "react";

export const MySQLIcon = (
  props: ComponentPropsWithRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 512 349"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <title>MySQL</title>
      <g>
        <path
          d="M152.309482,230.297132 L167.86997,280.784245 C171.365572,292.247035 172.823596,300.249204 172.240386,304.810306 C180.750861,282.018239 186.69631,257.179801 190.078866,230.297132 L208.788809,230.297132 C200.744231,274.062814 190.133104,305.867404 176.962131,325.707846 C166.699894,340.995741 155.457718,348.639536 143.215797,348.639536 C139.952382,348.639536 135.928112,347.65393 131.152739,345.695549 L131.152739,335.145347 C133.485579,335.487834 136.223069,335.670535 139.371305,335.670535 C145.082434,335.670535 149.685038,334.087943 153.186734,330.929176 C157.380116,327.08024 159.478635,322.754083 159.478635,317.959869 C159.478635,314.68531 157.841748,307.966018 154.582903,297.801687 L132.902369,230.297132 L152.309482,230.297132 Z M33.2240656,199.265507 L61.7248633,286.222494 L61.8997562,286.222494 L90.5754558,199.265507 L114.003486,199.265507 C119.133538,242.389598 122.162939,281.847453 123.093515,317.611577 L103.34119,317.611577 C102.646457,284.178568 100.720707,252.740602 97.5730804,223.291568 L97.3990803,223.291568 L67.3211176,317.611577 L52.279851,317.611577 L22.3841033,223.291568 L22.2079824,223.291568 C19.9897133,251.573517 18.5941538,283.011483 18.0121629,317.611577 L1.41179433e-16,317.611577 C1.1639819,275.532363 4.07698373,236.086729 8.73900548,199.265507 L33.2240656,199.265507 Z"
          fill="currentColor"
          fill-rule="nonzero"
        ></path>
        <path
          d="M352.497915,197.509381 C383.154516,197.509381 398.484341,217.096242 398.484341,256.248578 C398.484341,277.524962 393.874119,293.595598 384.662818,304.453459 C383.002163,306.437198 381.167855,308.150857 379.235981,309.739254 L379.235981,309.739254 L400.931141,320.466047 L400.909811,320.464825 L393.20681,333.766842 L364.954349,317.281922 C360.270998,318.668675 355.118397,319.361899 349.502642,319.361899 C334.450101,319.361899 323.206401,314.974638 315.771543,306.212336 C307.611482,296.518199 303.534498,281.25719 303.534498,260.454666 C303.534498,239.298962 308.135578,223.288818 317.349927,212.41782 C325.741566,202.474074 337.460609,197.509381 352.497915,197.509381 Z M258.617594,197.682305 C269.574869,197.682305 279.538798,200.614376 288.512428,206.457438 L283.954007,216.613826 C276.275382,213.349655 268.703406,211.711153 261.238077,211.711153 C255.180496,211.711153 250.51238,213.169398 247.258106,216.102998 C243.985549,219.011239 241.962293,222.753854 241.962293,227.315261 C241.962293,234.324186 246.956446,240.403721 256.176889,245.540116 C258.657424,246.888835 261.888271,248.687364 265.208154,250.551383 L265.896079,250.937851 C266.010873,251.002376 266.125718,251.066947 266.240588,251.131549 L266.929885,251.519402 C267.044745,251.584063 267.159575,251.648724 267.274348,251.713368 L267.962087,252.100904 C274.942764,256.036258 281.510254,259.792299 281.510254,259.792299 C290.730697,266.33714 295.325683,273.314902 295.325683,284.807938 C295.325683,294.844563 291.647866,303.08412 284.316608,309.530889 C276.979256,315.949245 267.121975,319.166977 254.778282,319.166977 C243.232922,319.166977 232.04407,315.463469 221.205631,308.116945 L226.275961,297.951086 C235.603052,302.625841 244.043444,304.960316 251.621514,304.960316 C258.730336,304.960316 264.294291,303.374059 268.319475,300.240039 C272.335517,297.08341 274.742705,292.680873 274.742705,287.096891 C274.742705,280.06994 269.8552,274.063425 260.887664,269.024491 C258.559224,267.743313 255.576874,266.07017 252.492622,264.326885 L251.80578,263.938465 C250.544317,263.224723 249.272726,262.503296 248.028336,261.795946 L247.3525,261.411646 C241.298293,257.967862 236.06316,254.958674 236.06316,254.958674 C227.098671,248.401918 222.604238,241.366718 222.604238,229.774999 C222.604238,220.1881 225.956018,212.439207 232.650438,206.543595 C239.360093,200.636068 248.016827,197.682305 258.617594,197.682305 Z M434.512933,199.265507 L434.512933,303.053568 L471.751212,303.053568 L471.751212,317.611577 L415.627174,317.611577 L415.627174,199.265507 L434.512933,199.265507 Z M492.443885,303.099091 L492.443885,305.558524 L488.348619,305.558524 L488.348619,317.599356 L485.219275,317.599356 L485.219275,305.558524 L480.965561,305.558524 L480.965561,303.099091 L492.443885,303.099091 Z M500.003704,303.099091 L503.934428,312.982955 L507.54521,303.099091 L511.981748,303.099091 L511.981748,317.599356 L509.032151,317.599356 L509.032151,306.563683 L504.921649,317.599356 L502.794823,317.599356 L498.678227,306.563683 L498.519749,306.563683 L498.519749,317.599356 L495.72866,317.599356 L495.72866,303.099091 L500.003704,303.099091 Z M350.569117,212.063723 C332.503021,212.063723 323.465403,226.973385 323.465403,256.77346 C323.465403,273.843146 325.860402,286.222494 330.64126,293.936864 L330.64126,293.936864 C335.068657,301.077468 342.003795,304.639826 351.446674,304.639826 C369.51277,304.639826 378.550389,289.614373 378.550389,259.575686 C378.550389,242.744612 376.15539,230.472501 371.380626,222.754465 C366.947135,215.629748 360.015044,212.063723 350.569117,212.063723 Z"
          fill="currentColor"
          fill-rule="nonzero"
        ></path>
        <path
          d="M303.217602,7.33321895 C309.211195,-7.39282549 330.165916,3.7586397 338.298554,8.90358967 C340.29134,10.1898272 342.576645,12.9089515 344.86195,13.914111 C348.427025,14.05465 351.989053,14.3326729 355.560223,14.4823775 C362.25769,16.0558034 368.531613,17.3420409 373.809143,20.3483537 C398.338081,34.7933201 414.304744,49.5132541 429.000777,73.8265034 C432.139263,78.9775638 433.708536,84.5502412 436.274141,90.1229186 C439.833122,98.4299963 443.833929,107.149526 447.96576,115.005351 C449.815333,118.729024 451.247427,122.870342 453.81614,126.015055 C454.818627,127.453136 457.667671,127.876586 459.370954,128.736012 C464.078682,131.172837 469.782803,133.022758 474.2102,135.883338 C482.479956,141.038981 490.475476,147.18298 497.742745,153.472406 C500.451593,155.900982 502.298119,159.338108 504.87899,161.906275 L504.87899,161.906275 L504.87899,163.202289 C502.587591,163.90529 500.305334,164.625094 498.020029,165.201304 C493.028923,166.484486 488.60762,166.194242 483.765821,167.477425 C480.773595,168.344795 477.059213,169.49049 473.920728,169.780737 C474.060894,169.921581 474.2102,170.07311 474.2102,170.07311 C476.056726,175.347906 486.045032,179.638317 490.612594,182.792502 C496.161314,186.796641 501.301727,191.653792 505.439652,197.229525 C506.868729,198.653246 508.297806,199.948343 509.720789,201.367176 C510.714135,202.805257 510.994435,204.664649 512,205.947832 L512,205.947832 L512,206.380753 C510.886126,205.987651 510.085422,205.238298 509.325681,204.453825 L508.872575,203.981496 C508.420028,203.510091 507.962628,203.049164 507.441579,202.668079 C504.293952,200.517526 501.167655,197.945663 498.020029,195.946648 C492.608427,192.513219 486.331457,190.520009 480.773595,187.073442 C477.632063,185.071983 474.63676,182.792502 471.641518,180.503549 C468.926575,178.496285 465.937397,174.641544 464.231036,171.781881 C463.225532,170.202039 463.088384,168.344786 461.939637,167.202753 C462.145191,165.293305 463.894482,164.725632 465.658657,164.259501 L466.065343,164.15317 C466.67368,163.994685 467.269709,163.836935 467.790017,163.62848 C475.203546,160.4801 484.043105,159.338083 495.45744,159.62434 L495.45744,159.62434 C495.027742,156.757967 487.894514,153.18736 485.618381,151.471256 C481.047771,148.177144 476.209019,144.740048 471.361126,141.74229 C468.792443,140.171614 464.365077,139.025915 461.51908,137.743039 C457.66758,136.169002 449.108351,134.595881 446.9754,131.598123 C443.350321,126.872182 440.746267,121.235168 438.218034,115.54054 L437.529685,113.986673 C437.300389,113.468668 437.071009,112.950829 436.840835,112.433796 C433.851657,105.577019 430.140322,98.4278608 427.145049,91.4070205 C425.578853,87.9821458 424.859744,84.975833 423.144242,81.6914974 C412.738488,61.5333146 397.335533,44.6564122 378.660023,32.786976 C372.523218,28.9252083 365.679492,25.350629 358.125798,22.9217483 C353.84466,21.6294004 348.707295,22.3443162 344.145826,21.3513775 L344.145826,21.3513775 L341.14449,21.3513775 C338.581902,20.6303513 336.442826,17.9142516 334.443976,16.4813952 C330.028768,13.484248 325.607465,11.4708739 320.326887,9.33223671 C318.477314,8.47372665 313.193719,6.47565906 311.35021,8.04905442 C310.207557,8.33624283 309.628614,8.76705601 309.348313,9.91275449 C308.211725,11.6236642 309.211164,14.1991944 309.918116,15.7756755 C312.060208,20.3462486 315.052434,23.0623178 317.767376,26.9240855 C320.183705,30.3489601 323.185072,34.2107278 324.897527,37.9350117 C328.593627,45.939625 330.315223,54.8088589 333.740133,62.8134722 C335.010762,65.8228402 337.018753,69.2477149 338.868357,71.9637841 C340.434552,74.1176972 343.283596,75.6758777 344.145887,78.4041371 C345.864437,81.2638005 341.574158,90.7012702 340.580812,93.698448 C336.866399,105.425207 337.585509,121.725593 341.863599,131.891452 C341.939844,132.068817 342.015799,132.247617 342.091741,132.427477 L342.319802,132.969854 C343.881696,136.692637 345.553537,140.701633 349.706765,141.743237 C349.99319,141.459107 349.706765,141.608491 350.273521,141.459107 C351.279085,133.590756 351.562433,126.01387 354.274328,119.857955 C355.840523,116.009019 358.969898,113.288062 361.115007,110.145793 C362.544084,111.001553 362.544084,113.582858 363.397295,115.290743 C365.252962,119.720777 367.245779,124.577927 369.5341,129.021099 C374.22964,138.171411 379.513264,147.042172 385.500763,155.04648 C387.505737,157.904616 390.351673,161.051804 392.917338,163.627303 C394.060021,164.623847 395.339762,165.200118 396.199036,166.483239 L396.199036,166.483239 L396.479367,166.483239 L396.479367,166.915244 C392.201276,165.337541 389.489381,160.91209 386.07666,158.32831 C379.65343,153.47116 371.95957,146.17688 367.532173,139.177426 C365.679553,135.160149 363.677595,131.309074 361.681793,127.311045 L361.681793,127.311045 L361.681793,127.022048 C360.828582,128.164446 361.115007,129.298107 360.688447,131.026187 C358.835827,138.171374 360.261857,146.322392 353.844721,148.891751 C346.571358,151.90173 341.14452,144.034601 338.868357,140.460327 C331.591946,128.593946 329.599161,108.576302 334.730432,92.4173707 C335.870037,88.8397363 336.025438,84.5502412 338.015176,81.693633 C337.585539,79.1119924 335.59577,78.4062116 334.444007,76.8236506 C332.448174,74.1198022 330.738766,70.9698647 329.175618,67.9666376 C326.174251,62.1006614 324.038252,55.0920419 321.759042,48.8013935 C320.756555,46.2319737 320.47016,43.6533883 319.47069,41.2214523 C317.767376,37.5093893 314.625813,33.7851054 312.203421,30.5007698 C308.921723,25.780492 299.366102,16.6332354 303.217602,7.33321895 Z M349.990143,35.3480734 C350.371027,35.7299729 350.831135,36.064011 351.30693,36.3925046 L351.881347,36.7867437 C352.646432,37.3160693 353.386614,37.874533 353.841643,38.6354642 C354.560722,39.6406237 354.694824,40.6335624 355.557145,41.6418076 C355.557145,45.078903 354.560722,47.3642201 352.549684,48.7879109 C352.549684,48.7879109 352.412566,48.9376766 352.272431,49.0781851 C351.132795,46.7867881 350.133386,44.507673 348.984639,42.2192702 C347.570797,40.221172 345.571887,38.6355253 344.420124,36.353294 L344.420124,36.353294 L344.14284,36.353294 L344.14284,36.0661361 C345.864437,35.6414333 347.570828,35.3480734 349.990173,35.3480734 Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};
