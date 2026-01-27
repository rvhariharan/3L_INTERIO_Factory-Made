# How to Run Your Project (Simple Guide)

Follow these steps every time you want to show your project to someone.

## Step 1: Open the Project Folder
1.  Go to the folder where your project is saved:
    `c:\Users\HP\Downloads\3l-interio---factory-made-interiors`
2.  Right-click anywhere in the empty space and select **"Open in Terminal"** (or Open in VS Code and open terminal there).

## Step 2: Start the Website
1.  In the black terminal window, type this command and press **Enter**:
    ```bash
    npm run dev
    ```
2.  You will see some text appear. Look for a line that says `Local: http://localhost:5173/`.

## Step 3: Open in Browser
1.  Open Chrome or Edge.
2.  Type `http://localhost:5173` in the address bar (or Ctrl+Click the link in the terminal).
3.  Your website is now live!

## Common Problems & Solutions

**Problem:** "Command not found"
**Solution:** Make sure you installed Node.js. (You already have it, so don't worry).

**Problem:** "The system cannot find the path specified"
**Solution:** Make sure you are in the correct folder (`3l-interio...`).

**Note:** You do NOT need to run `npm install` again unless you delete the `node_modules` folder. Just `npm run dev` is enough.
