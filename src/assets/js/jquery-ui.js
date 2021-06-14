/*! jQuery UI - v1.11.4 - 2015-12-03
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, button.js, slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e) { typeof define === 'function' && define.amd ? define(['jquery'], e) : e(jQuery) })(function(e) { function t(t, s) { var n; var a; var o; var r = t.nodeName.toLowerCase(); return r === 'area' ? (n = t.parentNode, a = n.name, t.href && a && n.nodeName.toLowerCase() === 'map' ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : r === 'a' ? t.href || s : s) && i(t) } function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return e.css(this, 'visibility') === 'hidden' }).length }e.ui = e.ui || {}, e.extend(e.ui, { version: '1.11.4', keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function(t) { var i = this.css('position'); var s = i === 'absolute'; var n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/; var a = this.parents().filter(function() { var t = e(this); return s && t.css('position') === 'static' ? !1 : n.test(t.css('overflow') + t.css('overflow-y') + t.css('overflow-x')) }).eq(0); return i !== 'fixed' && a.length ? a : e(this[0].ownerDocument || document) }, uniqueId: (function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = 'ui-id-' + ++e) }) } }()), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr('id') }) } }), e.extend(e.expr[':'], { data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, s) { return !!e.data(t, s[3]) }, focusable: function(i) { return t(i, !isNaN(e.attr(i, 'tabindex'))) }, tabbable: function(i) { var s = e.attr(i, 'tabindex'); var n = isNaN(s); return (n || s >= 0) && t(i, !n) } }), e('<a>').outerWidth(1).jquery || e.each(['Width', 'Height'], function(t, i) { function s(t, i, s, a) { return e.each(n, function() { i -= parseFloat(e.css(t, 'padding' + this)) || 0, s && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0), a && (i -= parseFloat(e.css(t, 'margin' + this)) || 0) }), i } var n = i === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom']; var a = i.toLowerCase(); var o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn['inner' + i] = function(t) { return void 0 === t ? o['inner' + i].call(this) : this.each(function() { e(this).css(a, s(this, t) + 'px') }) }, e.fn['outer' + i] = function(t, n) { return typeof t !== 'number' ? o['outer' + i].call(this, t) : this.each(function() { e(this).css(a, s(this, t, !0, n) + 'px') }) } }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(e == null ? this.prevObject : this.prevObject.filter(e)) }), e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = (function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData))), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: (function(t) { return function(i, s) { return typeof i === 'number' ? this.each(function() { var t = this; setTimeout(function() { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus)), disableSelection: (function() { var e = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown'; return function() { return this.bind(e + '.ui-disableSelection', function(e) { e.preventDefault() }) } }()), enableSelection: function() { return this.unbind('.ui-disableSelection') }, zIndex: function(t) { if (void 0 !== t) return this.css('zIndex', t); if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) { if (i = n.css('position'), (i === 'absolute' || i === 'relative' || i === 'fixed') && (s = parseInt(n.css('zIndex'), 10), !isNaN(s) && s !== 0)) return s; n = n.parent() } return 0 } }), e.ui.plugin = { add: function(t, i, s) { var n; var a = e.ui[t].prototype; for (n in s)a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) }, call: function(e, t, i, s) { var n; var a = e.plugins[t]; if (a && (s || e.element[0].parentNode && e.element[0].parentNode.nodeType !== 11)) for (n = 0; a.length > n; n++)e.options[a[n][0]] && a[n][1].apply(e.element, i) } }; var s = 0; var n = Array.prototype.slice; e.cleanData = (function(t) { return function(i) { var s, n, a; for (a = 0; (n = i[a]) != null; a++) try { s = e._data(n, 'events'), s && s.remove && e(n).triggerHandler('remove') } catch (o) {}t(i) } }(e.cleanData)), e.widget = function(t, i, s) { var n; var a; var o; var r; var h = {}; var l = t.split('.')[0]; return t = t.split('.')[1], n = l + '-' + t, s || (s = i, i = e.Widget), e.expr[':'][n.toLowerCase()] = function(t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) { return e.isFunction(s) ? (h[t] = (function() { var e = function() { return i.prototype[t].apply(this, arguments) }; var n = function(e) { return i.prototype[t].apply(this, e) }; return function() { var t; var i = this._super; var a = this._superApply; return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t } }()), void 0) : (h[t] = s, void 0) }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function(t, i) { var s = i.prototype; e.widget(s.namespace + '.' + s.widgetName, o, i._proto) }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function(t) { for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++) for (i in a[o])s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s); return t }, e.widget.bridge = function(t, i) { var s = i.prototype.widgetFullName || t; e.fn[t] = function(a) { var o = typeof a === 'string'; var r = n.call(arguments, 1); var h = this; return o ? this.each(function() { var i; var n = e.data(this, s); return a === 'instance' ? (h = n, !1) : n ? e.isFunction(n[a]) && a.charAt(0) !== '_' ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + ' widget instance') : e.error('cannot call methods on ' + t + ' prior to initialization; ' + "attempted to call method '" + a + "'") }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() { var t = e.data(this, s); t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this)) })), h } }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: 'widget', widgetEventPrefix: '', defaultElement: '<div>', options: { disabled: !1, create: null }, _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ' + 'ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus') }, _destroy: e.noop, widget: function() { return this.element }, option: function(t, i) { var s; var n; var a; var o = t; if (arguments.length === 0) return e.widget.extend({}, this.options); if (typeof t === 'string') if (o = {}, s = t.split('.'), t = s.shift(), s.length) { for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++)n[s[a]] = n[s[a]] || {}, n = n[s[a]]; if (t = s.pop(), arguments.length === 1) return void 0 === n[t] ? null : n[t]; n[t] = i } else { if (arguments.length === 1) return void 0 === this.options[t] ? null : this.options[t]; o[t] = i } return this._setOptions(o), this }, _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function(e, t) { return this.options[e] = t, e === 'disabled' && (this.widget().toggleClass(this.widgetFullName + '-disabled', !!t), t && (this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus'))), this }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _on: function(t, i, s) { var n; var a = this; typeof t !== 'boolean' && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) { function r() { return t || a.options.disabled !== !0 && !e(this).hasClass('ui-state-disabled') ? (typeof o === 'string' ? a[o] : o).apply(a, arguments) : void 0 } typeof o !== 'string' && (r.guid = o.guid = o.guid || r.guid || e.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/); var l = h[1] + a.eventNamespace; var u = h[2]; u ? n.delegate(u, l, r) : i.bind(l, r) }) }, _off: function(t, i) { i = (i || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) }, _delay: function(e, t) { function i() { return (typeof e === 'string' ? s[e] : e).apply(s, arguments) } var s = this; return setTimeout(i, t || 0) }, _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass('ui-state-hover') }, mouseleave: function(t) { e(t.currentTarget).removeClass('ui-state-hover') } }) }, _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass('ui-state-focus') }, focusout: function(t) { e(t.currentTarget).removeClass('ui-state-focus') } }) }, _trigger: function(t, i, s) { var n; var a; var o = this.options[t]; if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a)n in i || (i[n] = a[n]); return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, e.each({ show: 'fadeIn', hide: 'fadeOut' }, function(t, i) { e.Widget.prototype['_' + t] = function(s, n, a) { typeof n === 'string' && (n = { effect: n }); var o; var r = n ? n === !0 || typeof n === 'number' ? i : n.effect || i : t; n = n || {}, typeof n === 'number' && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) { e(this)[t](), a && a.call(s[0]), i() }) } }), e.widget; var a = !1; e(document).mouseup(function() { a = !1 }), e.widget('ui.mouse', { version: '1.11.4', options: { cancel: 'input,textarea,button,select,option', distance: 1, delay: 0 }, _mouseInit: function() { var t = this; this.element.bind('mousedown.' + this.widgetName, function(e) { return t._mouseDown(e) }).bind('click.' + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + '.preventClickEvent') ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function() { this.element.unbind('.' + this.widgetName), this._mouseMoveDelegate && this.document.unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(t) { if (!a) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var i = this; var s = t.which === 1; var n = typeof this.options.cancel === 'string' && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + '.preventClickEvent') && e.removeData(t.target, this.widgetName + '.preventClickEvent'), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.bind('mousemove.' + this.widgetName, this._mouseMoveDelegate).bind('mouseup.' + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0 } }, _mouseMove: function(t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function(t) { return this.document.unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate).unbind('mouseup.' + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)), a = !1, !1 }, _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } }); var o; var r = 'ui-button ui-widget ui-state-default ui-corner-all'; var h = 'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only'; var l = function() { var t = e(this); setTimeout(function() { t.find(':ui-button').button('refresh') }, 1) }; var u = function(t) { var i = t.name; var s = t.form; var n = e([]); return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() { return !this.form })), n }; e.widget('ui.button', { version: '1.11.4', defaultElement: '<button>', options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function() { this.element.closest('form').unbind('reset' + this.eventNamespace).bind('reset' + this.eventNamespace, l), typeof this.options.disabled !== 'boolean' ? this.options.disabled = !!this.element.prop('disabled') : this.element.prop('disabled', this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr('title'); var t = this; var i = this.options; var s = this.type === 'checkbox' || this.type === 'radio'; var n = s ? '' : 'ui-state-active'; i.label === null && (i.label = this.type === 'input' ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr('role', 'button').bind('mouseenter' + this.eventNamespace, function() { i.disabled || this === o && e(this).addClass('ui-state-active') }).bind('mouseleave' + this.eventNamespace, function() { i.disabled || e(this).removeClass(n) }).bind('click' + this.eventNamespace, function(e) { i.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this._on({ focus: function() { this.buttonElement.addClass('ui-state-focus') }, blur: function() { this.buttonElement.removeClass('ui-state-focus') } }), s && this.element.bind('change' + this.eventNamespace, function() { t.refresh() }), this.type === 'checkbox' ? this.buttonElement.bind('click' + this.eventNamespace, function() { return i.disabled ? !1 : void 0 }) : this.type === 'radio' ? this.buttonElement.bind('click' + this.eventNamespace, function() { if (i.disabled) return !1; e(this).addClass('ui-state-active'), t.buttonElement.attr('aria-pressed', 'true'); var s = t.element[0]; u(s).not(s).map(function() { return e(this).button('widget')[0] }).removeClass('ui-state-active').attr('aria-pressed', 'false') }) : (this.buttonElement.bind('mousedown' + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).addClass('ui-state-active'), o = this, t.document.one('mouseup', function() { o = null }), void 0) }).bind('mouseup' + this.eventNamespace, function() { return i.disabled ? !1 : (e(this).removeClass('ui-state-active'), void 0) }).bind('keydown' + this.eventNamespace, function(t) { return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass('ui-state-active'), void 0) }).bind('keyup' + this.eventNamespace + ' blur' + this.eventNamespace, function() { e(this).removeClass('ui-state-active') }), this.buttonElement.is('a') && this.buttonElement.keyup(function(t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption('disabled', i.disabled), this._resetButton() }, _determineButtonType: function() { var e, t, i; this.type = this.element.is('[type=checkbox]') ? 'checkbox' : this.element.is('[type=radio]') ? 'radio' : this.element.is('input') ? 'input' : 'button', this.type === 'checkbox' || this.type === 'radio' ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr('id') + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass('ui-helper-hidden-accessible'), i = this.element.is(':checked'), i && this.buttonElement.addClass('ui-state-active'), this.buttonElement.prop('aria-pressed', i)) : this.buttonElement = this.element }, widget: function() { return this.buttonElement }, _destroy: function() { this.element.removeClass('ui-helper-hidden-accessible'), this.buttonElement.removeClass(r + ' ui-state-active ' + h).removeAttr('role').removeAttr('aria-pressed').html(this.buttonElement.find('.ui-button-text').html()), this.hasTitle || this.buttonElement.removeAttr('title') }, _setOption: function(e, t) { return this._super(e, t), e === 'disabled' ? (this.widget().toggleClass('ui-state-disabled', !!t), this.element.prop('disabled', !!t), t && (this.type === 'checkbox' || this.type === 'radio' ? this.buttonElement.removeClass('ui-state-focus') : this.buttonElement.removeClass('ui-state-focus ui-state-active')), void 0) : (this._resetButton(), void 0) }, refresh: function() { var t = this.element.is('input, button') ? this.element.is(':disabled') : this.element.hasClass('ui-button-disabled'); t !== this.options.disabled && this._setOption('disabled', t), this.type === 'radio' ? u(this.element[0]).each(function() { e(this).is(':checked') ? e(this).button('widget').addClass('ui-state-active').attr('aria-pressed', 'true') : e(this).button('widget').removeClass('ui-state-active').attr('aria-pressed', 'false') }) : this.type === 'checkbox' && (this.element.is(':checked') ? this.buttonElement.addClass('ui-state-active').attr('aria-pressed', 'true') : this.buttonElement.removeClass('ui-state-active').attr('aria-pressed', 'false')) }, _resetButton: function() { if (this.type === 'input') return this.options.label && this.element.val(this.options.label), void 0; var t = this.buttonElement.removeClass(h); var i = e('<span></span>', this.document[0]).addClass('ui-button-text').html(this.options.label).appendTo(t.empty()).text(); var s = this.options.icons; var n = s.primary && s.secondary; var a = []; s.primary || s.secondary ? (this.options.text && a.push('ui-button-text-icon' + (n ? 's' : s.primary ? '-primary' : '-secondary')), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? 'ui-button-icons-only' : 'ui-button-icon-only'), this.hasTitle || t.attr('title', e.trim(i)))) : a.push('ui-button-text-only'), t.addClass(a.join(' ')) } }), e.widget('ui.buttonset', { version: '1.11.4', options: { items: 'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)' }, _create: function() { this.element.addClass('ui-buttonset') }, _init: function() { this.refresh() }, _setOption: function(e, t) { e === 'disabled' && this.buttons.button('option', e, t), this._super(e, t) }, refresh: function() { var t = this.element.css('direction') === 'rtl'; var i = this.element.find(this.options.items); var s = i.filter(':ui-button'); i.not(':ui-button').button(), s.button('refresh'), this.buttons = i.map(function() { return e(this).button('widget')[0] }).removeClass('ui-corner-all ui-corner-left ui-corner-right').filter(':first').addClass(t ? 'ui-corner-right' : 'ui-corner-left').end().filter(':last').addClass(t ? 'ui-corner-left' : 'ui-corner-right').end().end() }, _destroy: function() { this.element.removeClass('ui-buttonset'), this.buttons.map(function() { return e(this).button('widget')[0] }).removeClass('ui-corner-left ui-corner-right').end().button('destroy') } }), e.ui.button, e.widget('ui.slider', e.ui.mouse, { version: '1.11.4', widgetEventPrefix: 'slide', options: { animate: !1, distance: 0, max: 100, min: 0, orientation: 'horizontal', range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass('ui-slider ui-slider-' + this.orientation + ' ui-widget' + ' ui-widget-content' + ' ui-corner-all'), this._refresh(), this._setOption('disabled', this.options.disabled), this._animateOff = !1 }, _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function() { var t; var i; var s = this.options; var n = this.element.find('.ui-slider-handle').addClass('ui-state-default ui-corner-all'); var a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>"; var o = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++)o.push(a); this.handles = n.add(e(o.join('')).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { e(this).data('ui-slider-handle-index', t) }) }, _createRange: function() { var t = this.options; var i = ''; t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass('ui-slider-range-min ui-slider-range-max').css({ left: '', bottom: '' }) : (this.range = e('<div></div>').appendTo(this.element), i = 'ui-slider-range ui-widget-header ui-corner-all'), this.range.addClass(i + (t.range === 'min' || t.range === 'max' ? ' ui-slider-range-' + t.range : ''))) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass('ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'), this._mouseDestroy() }, _mouseCapture: function(t) { var i; var s; var n; var a; var o; var r; var h; var l; var u = this; var d = this.options; return d.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) { var i = Math.abs(s - u.values(t)); (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t) }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass('ui-state-active').focus(), h = a.offset(), l = !e(t.target).parents().addBack().is('.ui-slider-handle'), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css('borderTopWidth'), 10) || 0) - (parseInt(a.css('borderBottomWidth'), 10) || 0) + (parseInt(a.css('marginTop'), 10) || 0) }, this.handles.hasClass('ui-state-hover') || this._slide(t, o, s), this._animateOff = !0, !0)) }, _mouseStart: function() { return !0 }, _mouseDrag: function(e) { var t = { x: e.pageX, y: e.pageY }; var i = this._normValueFromMouse(t); return this._slide(e, this._handleIndex, i), !1 }, _mouseStop: function(e) { return this.handles.removeClass('ui-state-active'), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function() { this.orientation = this.options.orientation === 'vertical' ? 'vertical' : 'horizontal' }, _normValueFromMouse: function(e) { var t, i, s, n, a; return this.orientation === 'horizontal' ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), s < 0 && (s = 0), this.orientation === 'vertical' && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) }, _start: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger('start', e, i) }, _slide: function(e, t, i) { var s, n, a; this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > s || t === 1 && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger('slide', e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger('slide', e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i)) }, _stop: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger('stop', e, i) }, _change: function(e, t) { if (!this._keySliding && !this._mouseSliding) { var i = { handle: this.handles[t], value: this.value() }; this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger('change', e, i) } }, value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function(t, i) { var s, n, a; if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0; if (!arguments.length) return this._values(); if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value(); for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1)s[a] = this._trimAlignValue(n[a]), this._change(null, a); this._refreshValue() }, _setOption: function(t, i) { var s; var n = 0; switch (t === 'range' && this.options.range === !0 && (i === 'min' ? (this.options.value = this._values(0), this.options.values = null) : i === 'max' && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), t === 'disabled' && this.element.toggleClass('ui-state-disabled', !!i), this._super(t, i), t) { case 'orientation':this._detectOrientation(), this.element.removeClass('ui-slider-horizontal ui-slider-vertical').addClass('ui-slider-' + this.orientation), this._refreshValue(), this.handles.css(i === 'horizontal' ? 'bottom' : 'left', ''); break; case 'value':this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case 'values':for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s); this._animateOff = !1; break; case 'step':case 'min':case 'max':this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break; case 'range':this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) }, _values: function(e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function(e) { if (this._valueMin() >= e) return this._valueMin(); if (e >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1; var i = (e - this._valueMin()) % t; var s = e - i; return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5)) }, _calculateNewMax: function() { var e = this.options.max; var t = this._valueMin(); var i = this.options.step; var s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i; e = s + t, this.max = parseFloat(e.toFixed(this._precision())) }, _precision: function() { var e = this._precisionOf(this.options.step); return this.options.min !== null && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function(e) { var t = '' + e; var i = t.indexOf('.'); return i === -1 ? 0 : t.length - i - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshValue: function() { var t; var i; var s; var n; var a; var o = this.options.range; var r = this.options; var h = this; var l = this._animateOff ? !1 : r.animate; var u = {}; this.options.values && this.options.values.length ? this.handles.each(function(s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u[h.orientation === 'horizontal' ? 'left' : 'bottom'] = i + '%', e(this).stop(1, 1)[l ? 'animate' : 'css'](u, r.animate), h.options.range === !0 && (h.orientation === 'horizontal' ? (s === 0 && h.range.stop(1, 1)[l ? 'animate' : 'css']({ left: i + '%' }, r.animate), s === 1 && h.range[l ? 'animate' : 'css']({ width: i - t + '%' }, { queue: !1, duration: r.animate })) : (s === 0 && h.range.stop(1, 1)[l ? 'animate' : 'css']({ bottom: i + '%' }, r.animate), s === 1 && h.range[l ? 'animate' : 'css']({ height: i - t + '%' }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u[this.orientation === 'horizontal' ? 'left' : 'bottom'] = i + '%', this.handle.stop(1, 1)[l ? 'animate' : 'css'](u, r.animate), o === 'min' && this.orientation === 'horizontal' && this.range.stop(1, 1)[l ? 'animate' : 'css']({ width: i + '%' }, r.animate), o === 'max' && this.orientation === 'horizontal' && this.range[l ? 'animate' : 'css']({ width: 100 - i + '%' }, { queue: !1, duration: r.animate }), o === 'min' && this.orientation === 'vertical' && this.range.stop(1, 1)[l ? 'animate' : 'css']({ height: i + '%' }, r.animate), o === 'max' && this.orientation === 'vertical' && this.range[l ? 'animate' : 'css']({ height: 100 - i + '%' }, { queue: !1, duration: r.animate })) }, _handleEvents: { keydown: function(t) { var i; var s; var n; var a; var o = e(t.target).data('ui-slider-handle-index'); switch (t.keyCode) { case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass('ui-state-active'), i = this._start(t, o), i === !1)) return } switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) { case e.ui.keyCode.HOME:n = this._valueMin(); break; case e.ui.keyCode.END:n = this._valueMax(); break; case e.ui.keyCode.PAGE_UP:n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.PAGE_DOWN:n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages); break; case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if (s === this._valueMax()) return; n = this._trimAlignValue(s + a); break; case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if (s === this._valueMin()) return; n = this._trimAlignValue(s - a) } this._slide(t, o, n) }, keyup: function(t) { var i = e(t.target).data('ui-slider-handle-index'); this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass('ui-state-active')) } } }) })
