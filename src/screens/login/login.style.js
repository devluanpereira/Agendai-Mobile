import { COLORS } from "../../constants/theme";
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
   safe: {
    flex: 1,
    backgroundColor: "#e8ecf4"
   },

   container:{
    padding: 24,
    flex: 1
   },

   header: {
    marginVertical: 36,
   },

   headerLogo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36
   },

   title: {
    fontSize: 27,
    fontWeight: '700',
    color: COLORS.pretociano,
    marginBottom: 6,
    textAlign: "center"
   },

   subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.cinza2,
    textAlign: "center"
   },

   input: {
    marginBottom: 16
   },

   inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8
   },


   inputControl: {
    height: 44,
    backgroundColor:'#ffffff',
    paddingHorizontal: 16,
    borderRadius: 6,
    fontSize: 15,
    fontWeight: '500',
    color: '#222'
   },

   form: {
    marginBottom: 24,
    flex: 1
   },

   formAction: {
    marginVertical: 24
   },

   formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15
   },

   btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
   },

   btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
   }

});
