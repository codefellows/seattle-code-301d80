# Lecture Notes


## Custom Express Server in node.js
### why
- Secure our keys, when HTTP Referrer restrictions aren't an option
- Set us up to scale our application, without hammering the API, caching
- Provide our application a single source to fetch all of the data it needs rather than having to reach out to several sources
- Allow a server to do the hard work of formatting data to feed our front end
## What
  - Node.js and Express
  - Web/HTTP Server
  - Listens on a Port (3001) - our react apps will be on port 3000
  - Receives Requests (GET), "does work", sends back a response.
    - Describe/Draw the request/response process














This code sample is written in Java. Read through the code and determine the output for this function.

import java.util.*;

public class Count {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < 20; i++) {
            int randomNumber = (int) Math.floor(50 * Math.random());
            numbers.add(randomNumber);
        }
        System.out.println(numbers);

        HashMap<String, Integer> tally = new HashMap<>();
        tally.put("even", 0);
        tally.put("odd", 0);

        for (int i = 0; i < numbers.size(); i++) {
            String key;
            int value = numbers.get(i);
            if (value % 2 == 0) {
                key = "even";
            } else {
                key = "odd";
            }

            int votesSoFar = tally.get(key);
            tally.put(key, votesSoFar + 1);
        }

        System.out.println("Total even: " + tally.get("even"));
        System.out.println("Total odd: " + tally.get("odd"));
    }
}