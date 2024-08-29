import { blackA, orange, orangeDark} from '@radix-ui/colors';

export const Light = {
    Font1: "sirin stencil",
    Font2: 'Cinzel Variable',

    colors: {
        ...blackA,
        ...orange,
    },

    Body: blackA.blackA11,
    TextColor: orange.orange7,
    Color: orange.orange1,
    logo: "#FCE181",
};
  
export const Dark = {
    Font1: "cinzel",
    Font2: "grandstander",

    colors: {
        ...blackA,
        ...orangeDark,
    },

    Body: blackA.blackA10,
    TextColor: orange.orange7,
    Color: orange.orange1,
};