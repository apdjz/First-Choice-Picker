
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;

public class ChoiceSelector {

   private HashMap<String, Integer> itemList;
   private ArrayList<String[]> preferences;
   private LinkedList<Integer> unassignedPersonId;
  
   ChoiceSelector() {
       itemList = new HashMap<String, Integer>();
       preferences = new ArrayList<String[]>();
       unassignedPersonId = new LinkedList<Integer>();
   }
  
   public void setPossibleChoices(String itemName, int itemQuantity) {
       itemList.put(itemName, itemQuantity);
   }
  
   public void setPreferences(int id, String[] choices) {
       preferences.add(id, choices);
   }
  
   public void assignPreference() {
       for(int i=0; i<preferences.size(); i++) { //for each person
           boolean assigned = false;
           String[] temp = preferences.get(i);  
               for(int j = 0; j<temp.length; j++) { //from their preference list
                   if (itemList.get(temp[j]) > 0) {
                       System.out.println("For person " + i + " available choice is " + temp[j]);
                       itemList.put(temp[j], (itemList.get(temp[j])) - 1);
                       assigned = true;
                       break;
                   }
               }
               if(assigned == false)
                   unassignedPersonId.add(i); //not assigned any preference
       }
       System.out.print("Could not be assigned to : ");
       for(int i = 0; i<unassignedPersonId.size(); i++)
           System.out.print(unassignedPersonId.get(i) + " ");
       System.out.println();
   }
  
   public static void main(String[] args) {
       ChoiceSelector c = new ChoiceSelector();
       String[] items = {"chocolate", "cookies", "candy", "peanuts", "toffee", "hazelnut", "wafer", "pie"};
       int perItemQuantity = 2; //assuming same, can be different for each item
      
       String[] person0Choices = {"hazelnut", "pie", "toffee"};
       String[] person1Choices = {"candy", "cookies", "pie", "toffee"};
       String[] person2Choices = {"candy", "cookies", "peanuts", "toffee", "hazelnut"};
       String[] person3Choices = {"candy", "cookies", "pie", "toffee"};
       String[] person4Choices = {"cookies", "pie", "toffee"};
       String[] person5Choices = {"candy", "cookies", "hazelnut", "toffee"};
       String[] person6Choices = {"hazelnut", "cookies", "candy", "wafer", "pie", "toffee"};
       String[] person7Choices = {"hazelnut", "cookies", "candy"};
       //int totalPersons = 7;
      
       //Set possible items
       for(String s : items)
           c.setPossibleChoices(s, perItemQuantity);
      
       //Set preferences for each person
       c.setPreferences(0, person0Choices);
       c.setPreferences(1, person1Choices);
       c.setPreferences(2, person2Choices);
       c.setPreferences(3, person3Choices);
       c.setPreferences(4, person4Choices);
       c.setPreferences(5, person5Choices);
       c.setPreferences(6, person6Choices);
       c.setPreferences(7, person7Choices);
      
       //assigned choice
       c.assignPreference();
   }
}
