export type ItemLaunchType = {
    id: string;
    name: string;
    image: string;
    status: {
        description: string,
        name: string
    },
    rocket:{
        configuration: {
          name: string
        }
      }

}