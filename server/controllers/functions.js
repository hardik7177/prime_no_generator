import Record from "../dataModel/schema.js";
import { Aproach_1,Aproach_2, Aproach_3, Aproach_4, Aproach_5,} from "./aproaches.js";

// function to store data in dB.
export const Create_Data = async (req, res) => {
  try {
    let Time_Elapsed,Aproach, Result = [];
    let email = req.body.email;
    let compare_id = req.body.aproach;
    let start = parseInt(req.body.start);
    let end = parseInt(req.body.end);

    // checking which aproach to run acording to value entered by user.

    if (compare_id == 1) {

      const startTime = Date.now();
      Result = await Aproach_1(start, end);
      const endTime = Date.now();
      Time_Elapsed = endTime - startTime;
      Aproach = "Algorithm 1 , time complexity = O(N^2)";
    } 
    else if (compare_id == 2) {
      const startTime = Date.now();
      Result = await Aproach_2(start, end);
      const endTime = Date.now();
      Time_Elapsed = endTime - startTime;
      Aproach = "Algorithm 2 , time complexity = O(N^2)";
    } 
    else if (compare_id == 3) {
      const startTime = Date.now();
      Result = await Aproach_3(start, end);
      const endTime = Date.now();
      Time_Elapsed = endTime - startTime;
      Aproach = "Algorithm 3 , time complexity = O(N*sqrt(N))";
    }
     else if (compare_id == 4) {
      const startTime = Date.now();
      Result = await Aproach_4(start, end);
      const endTime = Date.now();
      Time_Elapsed = endTime - startTime;
      Aproach = "Algorithm 4 [Sieve of Eratosthenes] , time complexity = O(N*log(log(n)))";
    }
     else if (compare_id == 5) {
      const startTime = Date.now();
      Result = await Aproach_5(start, end);
      const endTime = Date.now();
      Time_Elapsed = endTime - startTime;
      Aproach = "Algorithm 5 , time complexity = O(N*sqrt(M))";
    }else {
       res.json("INVALID APPROACH ENTERED")
               return ;
    }

     //  cheching that the range entered is valid or not.
     if ((start <= 0 && end <= 0) || end < start || (start < 0 && end > 0)) {
      res
        .status(400)
        .json(
          " INVALID RANGE ENTERED.......{ PLEASE ENTER POSITIVE VALUE} AND {INCREASING RANGE}"
        );
        return;
    }
    // Creating object "log" to store all fields that we want to save in our DB.
    let log = [
      {
        start: start,
        end: end,
        aproach: Aproach,
        prime_no: Result,
        total_primes: Result.length,
        time_Elapsed: Time_Elapsed + "  milliseconds",
      },
    ];

    // checking that the email entered by user exist in dB or not . if it exist we update it with the current Result.
    let user = await Record.findOne({ email });
    if (user != null) {
       
       await Record.findOneAndUpdate({ email: email },{ $push: { log } });
      
    } else {
      await Record.create({ log, email: email });
    }

   
      res.status(200).json(log);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to fetch all data existing in dB.
export const Get_All_Data = async (req, res) => {
  try {
    const All_Data = await Record.find({});

    // checking if dB is empty or not
    if (All_Data.length == 0) {
      res.json(" Your DataBase is Empty");
      return;
    }

    res.status(200).json(All_Data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to fetch particular data .

export const Get_Data_By_Email = async (req, res) => {
  try {
    const email = await req.params.url;
    const data = await Record.findOne({ email });

    // checking that particular data exists or not.
    if (!data) {
      res.json(`No data match present with email  as  ${email}  `);
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// function to delete a particular data.

export const Delete_Data = async (req, res) => {
  try {
    const email = await req.params.url;
    const user = await Record.findOneAndDelete({ email });

    // checking that particular data exists or not.
    if (!user) {
      res.json(`No email exist as ${email}`);
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
