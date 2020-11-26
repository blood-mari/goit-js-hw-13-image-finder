import {defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';
defaults.remove = false;

defaults.delay = 4000;
defaults.addClass = 'error';
delete defaults.stack;


// defaults.stack = new Stack({
//     dir1: 'up',
//     dir2: 'left',
//     firstpos1: 25,
//     firstpos2: 25,
//     spacing1: 36,
//     spacing2: 36,
//     push: 'top',
//     context: document.body
//   })