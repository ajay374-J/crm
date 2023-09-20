// Copyright (c) 2023, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Crm_test', {
    refresh: function(frm) {
        frm.add_custom_button(__('Draft'), function() {
            frappe.msgprint('Draft selected');
        }, __("Status"));

        frm.add_custom_button(__('Assessment'), function() {
            frappe.msgprint('Assessment selected');
        }, __("Status"));

        frm.add_custom_button(__('Login'), function() {
            frappe.msgprint('Login selected');
        }, __("Status"));

        frm.add_custom_button(__('Bank Login Query'), function() {
            frappe.msgprint('Bank Login Query selected');
        }, __("Status"));

        frm.add_custom_button(__('Login done'), function() {
            frappe.msgprint('Login done selected');
        }, __("Status"));

        frm.add_custom_button(__('Credit query'), function() {
            frappe.msgprint('Credit query selected');
        }, __("Status"));

        frm.add_custom_button(__('File Sanction'), function() {
            frappe.msgprint('File Sanction selected');
        }, __("Status"));

        frm.add_custom_button(__('Property Assessment'), function() {
            frappe.msgprint('Property Assessment selected');
        }, __("Status"));

        frm.add_custom_button(__('Valuation of property'), function() {
            frappe.msgprint('Valuation of property selected');
        }, __("Status"));

        frm.add_custom_button(__('Technical Evaluation'), function() {
            frappe.msgprint('Technical Evaluation selected');
        }, __("Status"));

        frm.add_custom_button(__('Disbursement'), function() {
            frappe.msgprint('Disbursement selected');
        }, __("Status"));

        frm.add_custom_button(__('Closed'), function() {
            frappe.msgprint('Closed selected');
        }, __("Status"));

        frm.add_custom_button(__('Cancelled'), function() {
            frappe.msgprint('Cancelled selected');
        }, __("Status"));
    }
});
