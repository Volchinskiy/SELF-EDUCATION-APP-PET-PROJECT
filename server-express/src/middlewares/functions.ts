export function getRepeatQuestions(arr: any) {
  const result = [];
  const todayDate = new Date(Date.now() + 10_800_000);

  // tslint:disable-next-line: prefer-for-of
  for(let index = 0; index < arr.length; index++) {
    if(arr[index].repeats){
      if(todayDate > arr[index].repeats.firstRepeat.date){
        if(arr[index].repeats.firstRepeat.done){
          if(todayDate > arr[index].repeats.secondRepeat.date){
            if(arr[index].repeats.secondRepeat.done){
              if(todayDate > arr[index].repeats.thirdRepeat.date) {
                if(arr[index].repeats.thirdRepeat.done){
                  if(todayDate > arr[index].repeats.fourthRepeat.date){
                    if(arr[index].repeats.fourthRepeat.done){
                      if(todayDate > arr[index].repeats.fifthRepeat.date){
                        if(arr[index].repeats.fifthRepeat.done){
                          if(todayDate > arr[index].repeats.sixthRepeat.date){
                            if(arr[index].repeats.sixthRepeat.done){
                              if(todayDate > arr[index].repeats.seventhRepeat.date){
                                if(arr[index].repeats.seventhRepeat.done){
                                  continue;
                                } else { result.push(arr[index]); }
                              }
                            } else { result.push(arr[index]); }
                          }
                        } else { result.push(arr[index]); };
                      }
                    } else { result.push(arr[index]); };
                  }
                } else { result.push(arr[index]); };
              }
            } else { result.push(arr[index]); };
          }
        } else { result.push(arr[index]); };
      }
    }
  }

  return result;
}
