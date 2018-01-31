const _ =require('lodash');

let old_a = ['layer1', '大型水闸', 3, 33,4 ], new_a = ['layer2', '大型水闸', '小型水闸', 3, 4];



let v_tobe_false = _.difference(old_a, new_a);
let v_tobe_true = _.difference(new_a, old_a);


console.log(v_tobe_false +' - '+ v_tobe_true);