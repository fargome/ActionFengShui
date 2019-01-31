/******
 * Some vars has been added to storage because session removed while 
 * listening long media (don't know why) 
 * conv.user.storage.started : suggested during session
 * conv.user.storage.lastplayed: current playing media
 * 
 * Some normally user storage
 * conv.user.storage.listened : listened entirely
 * 
 * Some stay in session storage
 * conv.data.cleared : indicate if user recently erased history
 */
const addToListened = (conv, guid) => {
    if (!conv.user.storage.listened) {
        conv.user.storage.listened = [];
    }
    conv.user.storage.listened.push(guid);
}

const isListenedAllTime = (conv, guid) => {
    if (conv.user) {
        if (!conv.user.storage.listened) {
            conv.user.storage.listened = [];
        }
        return conv.user.storage.listened.includes(guid);
    }
    return false;
}

const isListenedCurrentSession = (conv, guid) => {
    if (!conv.user.storage.started) {
        conv.user.storage.started = [];
    }
    return conv.user.storage.started.includes(guid);
}

/**
 * Store podcast guid
 */
const listening = (conv, guid) => {
    conv.user.storage.lastplayed = guid;
    addListenedDuringCurrentConv(conv, guid);
}

const lastPlayed = (conv) => {
    return conv.user.storage.lastplayed;
}

const addListenedDuringCurrentConv = (conv, guid) => {
    if (!conv.user.storage.started) {
        conv.user.storage.started = [];
    }
    return conv.user.storage.started.push(guid);
}

const clearHistory = (conv) => {
    conv.user.storage.lastplayed = undefined;
    conv.data.cleared = true;
    conv.user.storage.started = [];
    if (conv.user) {
        conv.user.storage = {};
    }
}

const clearSession = (conv) => {
    conv.user.storage.lastplayed = undefined;
    conv.user.storage.started = [];
}

module.exports = { addToListened, isListenedAllTime, isListenedCurrentSession, listening, clearHistory, clearSession, lastPlayed }