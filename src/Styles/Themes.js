import { slate, orange, slateDark, orangeDark} from '@radix-ui/colors';

export const Light = {
    Font1: "cinzel",
    Font2: "grandstander",

    colors: {
        ...slate,
        ...orange
    },

    Body: slate.slate11,
    
};
  
export const Dark = {
    Font1: "cinzel",
    Font2: "grandstander",

    colors: {
        ...slateDark,
        ...orangeDark,
    },
};