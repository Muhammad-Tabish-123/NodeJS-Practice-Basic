
const chalk=require('chalk');
const fs=require('fs');

const getNotes=function(){
    return "..gettinfg notes";
}

// to add note
const addNotes=function(title,body){
    const notes= loadNotes();
    const duplicateTitles=notes.filter(note=> title===note.title);  //will check every element and returns array
    const duplicateTitle=notes.find(note=> title===note.title); // more efficient will return first element to satisfy condition



    if(!duplicateTitle){
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.bgGreen("note added"));
    }else{
        console.log(chalk.red.inverse("note title taken"));

    }
}

// to remove a note
const remove=function(title){
    const notes=loadNotes();
    const notesToKeep=notes.filter(note=>note.title!==title);
    
    
    
    if(JSON.stringify(notes)==JSON.stringify(notesToKeep)){
        console.log(chalk.bgRed("No note found"));
    }else{
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen("Note removed"));
    }
    
}

// List all notes
const listAll=function(){
    const notes=loadNotes();
    console.log(chalk.green.inverse('Your Notes'));

    notes.forEach(element => {
        console.log(`-${element.title}`);
    });
}

// Read specific node
const readNote=function(title){
    const notes=loadNotes();
    readAble=notes.find(note=>title===note.title);
    if(readAble){
        console.log(chalk.green.inverse(readAble.title));
    console.log(readAble.body);
    }else{
        console.log(chalk.red.inverse("Note not found"));
    }
    
}

// to save note
const saveNotes=function(notes){
    dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

// to load notes from file
const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json');
        const dataJSON=dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch{
        return [];
    } 
}

module.exports= {
    getNotes: getNotes,
    addNotes: addNotes,
    remove: remove,
    listAll: listAll,
    readNote: readNote,
};