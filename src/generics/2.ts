type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  type TopType = Pick<AllType, "name" | "color">;
  type BottomType = Pick<AllType, "position" | "weight">;
  
  function compare(top: TopType, bottom: BottomType): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
  const topItem: TopType = {
    name: "cube",
    color: "red",
  };
  
  const bottomItem: BottomType = {
    position: 800,
    weight: 400,
  };
  
  const result = compare(topItem, bottomItem);
  
  console.log(result);