import React from "react";
import { Button } from "../../../../shared/ui/button";

export  const SaveCard: React.FC = () => {
    const handleSaveButton=(event:any)=>{
        console.log(event.target)
    }
  return <Button onClick={handleSaveButton}>Сохранить</Button>;
};


