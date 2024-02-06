# Import the Dropbox module
import dropbox

#Create an instance of the Dropbox class and pass the access token
dbx = dropbox.Dropbox('sl.BvGc_H2n8udfW7wNNwf4TgPTE8vsuF-Cv2HCIIEISB4sU1WHAm6yQy4UPsUqhuClmjG75WEjkcKIb75Lyjou6bE7WbUGiQWFI-y1oR_n1LXKOzAJ9Y8-gUbFzGVDQa_WtS9p3vNGn0DFGHTDZQgoYAA')

# Get information about the current user's Dropbox account
account_info = dbx.users_get_current_account()

# Print the account information
print("Account ID:", account_info.account_id)
print("Account Name:", account_info.name.display_name)
print("Account Email:", account_info.email)

# List files in the root folder and print their names
for entry in dbx.files_list_folder('').entries:
    print(entry.name)