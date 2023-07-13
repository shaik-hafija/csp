export interface Flower {
    p_id:String;
    p_image:String;
    p_name:String;
    p_type:String;
    p_cost:Number;

}
 export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
   }
   export interface InsertedSuccess {
     lastRowid: String;
     rowsAffected: Number;
   }
  export interface Read {
    Result: [];
  }
  
